import * as React from 'react';
import { useEffectEvent } from './utils';

// Re-export React components we need
export const {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useContext,
  createContext,
  createElement,
  Fragment,
  forwardRef,
  memo,
  isValidElement,
  Children,
  // Add any other React exports your app uses
} = React;

// Export our custom implementation
export { useEffectEvent };

// Default export for React import
export default React; 