/**
 * This file contains patches for React 19 compatibility with packages
 * expecting the experimental useEffectEvent API.
 */

// Only apply the patch if useEffectEvent doesn't exist
if (typeof (React as any).useEffectEvent === 'undefined') {
  // Add the useEffectEvent implementation to the React namespace
  // This polyfill uses stable APIs to achieve the same functionality
  (React as any).useEffectEvent = function useEffectEvent<T extends (...args: any[]) => any>(
    callback: T
  ): T {
    const callbackRef = React.useRef(callback);
    
    // Update the ref on each render
    callbackRef.current = callback;
    
    // Return a stable function that calls the latest callback
    return React.useCallback((...args: Parameters<T>): ReturnType<T> => {
      return callbackRef.current(...args);
    }, []) as T;
  };
} 