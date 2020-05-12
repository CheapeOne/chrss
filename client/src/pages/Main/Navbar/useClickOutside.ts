import { useEffect, useRef } from 'react';

// Close something when you click outside it
export default function useClickOutside(
  open: boolean,
  setOpen: (val: boolean) => void
) {
  const node = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    console.log('clicking anywhere');
    if (e.target instanceof Element && node.current?.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return node;
}
