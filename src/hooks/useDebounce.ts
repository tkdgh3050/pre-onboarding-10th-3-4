import { useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useDebounce = <T extends any[]>(callback: (...args: T) => void, timeout: number) => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  return (...args: T) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      callback(...args);
      timer.current = null;
    }, timeout);
  };
};

export default useDebounce;
