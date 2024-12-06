import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface LazyLoadInViewWrapperProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
  threshold?: number;
}

const LazyLoadInViewWrapper: React.FC<LazyLoadInViewWrapperProps> = ({
  children,
  fallback,
  threshold = 0.1,
}) => {
  const [hasBeenLoaded, setHasBeenLoaded] = useState(false);
  const [ref, isInView] = useInView({ threshold });

  useEffect(() => {
    if (isInView && !hasBeenLoaded) {
      setHasBeenLoaded(true);
    }
  }, [isInView, hasBeenLoaded]);

  return <div ref={ref}>{hasBeenLoaded || isInView ? children : fallback}</div>;
};

export default LazyLoadInViewWrapper;
