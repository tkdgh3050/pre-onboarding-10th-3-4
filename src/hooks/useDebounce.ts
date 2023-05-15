import { useRef } from 'react';

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
