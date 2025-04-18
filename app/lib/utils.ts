import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useCallback, useRef } from 'react'

/**
 * Combines multiple class values into a single string, handling Tailwind conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * A shim for the useEffectEvent API for compatibility with Radix UI components
 * This implements a stable alternative using useCallback
 */
export function useEffectEvent<T extends (...args: any[]) => any>(callback: T): T {
  const callbackRef = useRef(callback)
  
  // Update the ref on each render
  callbackRef.current = callback
  
  // Return a stable function that calls the latest callback
  return useCallback((...args: Parameters<T>): ReturnType<T> => {
    return callbackRef.current(...args)
  }, []) as T
} 