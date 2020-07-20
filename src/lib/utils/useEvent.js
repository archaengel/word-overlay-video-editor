import { useEffect } from 'react';

export const useEvent = (eventName, cb) => {
  useEffect(() => {
    window.addEventListener(eventName, cb);
    return () => {
      window.removeEventListener(eventName, cb);
    };
  }, [eventName, cb]);
};
