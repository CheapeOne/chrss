import React, { useEffect, useState } from 'react';
import { css } from 'linaria';
import cn from 'classnames';

interface Props {
  src?: string;
  alt?: string;
  className?: string;
}

const LazyImage: React.FC<Props> = props => {
  const [imageSrc, setImageSrc] = useState<string | undefined>();
  const [imageRef, setImageRef] = useState();
  const [loaded, setLoaded] = useState(false);

  const onLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setImageSrc(props.src);
    setLoaded(true);
  };

  useEffect(() => {
    let observer: IntersectionObserver;
    let didCancel = false;

    if (imageRef && imageSrc !== props.src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(props.src);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '75%',
          }
        );
        observer.observe(imageRef);
      } else {
        // Old browsers fallback
        setImageSrc(props.src);
      }
    }
    return () => {
      didCancel = true;
      // on component cleanup, we remove the listner
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [props.src, imageSrc, imageRef]);

  return (
    <div className={cn(wrapperClass, props.className)}>
      <img
        ref={setImageRef}
        src={imageSrc}
        alt={props.alt}
        onLoad={onLoad}
        className={cn({ loaded })}
      />
    </div>
  );
};

const wrapperClass = css`
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.2s linear;
  }

  img.loaded {
    opacity: 1;
  }
`;

export default LazyImage;
