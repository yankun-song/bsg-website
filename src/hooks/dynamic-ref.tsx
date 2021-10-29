import * as React from "react";

const map = new Map<string, React.RefObject<unknown>>();

function setRef<T>(key: string): React.RefObject<T> {
  const ref = React.createRef<T>();
  map.set(key, ref);
  return ref;
}

function getRef<T>(key: string): React.RefObject<T> {
  return map.get(key) as React.RefObject<T>;
}

function useDynamicRef<T>(): [
  (key: string) => React.RefObject<T>,
  (key: string) => React.RefObject<T>
] {
  return [getRef, setRef];
}

export default useDynamicRef;
