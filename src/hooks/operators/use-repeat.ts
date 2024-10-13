import { DependencyList, useCallback } from "react";

export const sleep = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export const repeat = <Params extends any[], T>(
  func: (...args: Params) => Promise<T | undefined>,
  interval: number,
) => {
  const recursive = async (...args: Params): Promise<T> => {
    const value = await func(...args);
    if (value) {
      return value;
    }
    await sleep(interval);
    return recursive(...args);
  };
  return recursive;
};

export const useRepeat = <Params extends any[], T>(
  func: (...args: Params) => Promise<T | undefined>,
  interval: number,
  deps: DependencyList,
) => useCallback(repeat(func, interval), deps);
