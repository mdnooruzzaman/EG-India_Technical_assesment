import {useState, useEffect} from "react";

/**
 *Preevnt delay in rendering values entered time
 */
 export function useDebounce<T>(value: T, delay?: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
  
    useEffect(() => {
      const timer = setTimeout(() => setDebouncedValue(value), delay || 500);
  
      return () => {
        clearTimeout(timer);
      };
    }, [value, delay]);
  
    return debouncedValue;
  }