import { useCallback, useRef } from 'react';

/**
 * A polyfill for React's experimental useEffectEvent API
 * This provides the same functionality using stable React features
 */
export function useEventCallback<T extends (...args: any[]) => any>(callback: T): T {
  const callbackRef = useRef(callback);
  
  // Update the ref on each render
  callbackRef.current = callback;
  
  // Return a stable function that calls the latest callback
  return useCallback((...args: Parameters<T>): ReturnType<T> => {
    return callbackRef.current(...args);
  }, []) as T;
} 