import { DependencyList, useCallback } from "react";

export const throttle = <Params extends any[]>(
  func: (...args: Params) => void,
  timeout: number,
) => {
  let timer: NodeJS.Timeout | null;

  return (...args: Params) => {
    if (!timer) {
      func(...args);
      timer = setTimeout(() => {
        timer = null;
      }, timeout);
    }
  };
};

export const useThrottle = <Params extends any[]>(
  callback: (...args: Params) => void,
  timeout: number,
  deps: DependencyList,
) => useCallback(throttle(callback, timeout), deps);
