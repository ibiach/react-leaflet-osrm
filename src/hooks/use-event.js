import React from 'react';

export const useEvent = fn => {
  const fnRef = React.useRef(null);

  React.useLayoutEffect(() => {
    fnRef.current = fn;
  });

  return React.useCallback((...args) => {
    if (fnRef.current) {
      return fnRef.current(...args);
    }
  }, []);
};
