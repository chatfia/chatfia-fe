import { DependencyList, useCallback } from "react";

export const debounce = <Params extends any[]>(
  func: (...args: Params) => void,
  timeout: number,
): ((...args: Params) => void) => {
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};

export const useDebounce = <Params extends any[]>(
  callback: (...args: Params) => void,
  timeout: number,
  deps: DependencyList,
) => useCallback(debounce(callback, timeout), deps);
