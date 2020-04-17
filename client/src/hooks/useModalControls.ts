import { useCallback, useState } from 'react';

type Hook = [boolean, () => void, () => void];

export default function useModalControls(): Hook {
  const [active, setActive] = useState(false);

  const open = useCallback(() => setActive(true), []);
  const close = useCallback(() => setActive(false), []);

  return [active, open, close];
}
