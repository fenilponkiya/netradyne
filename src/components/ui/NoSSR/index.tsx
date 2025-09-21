"use client";
import { useEffect, useState } from "react";

interface NoSSRProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * NoSSR component to prevent hydration mismatches
 * Useful for components that might be affected by browser extensions
 */
const NoSSR: React.FC<NoSSRProps> = ({ children, fallback = null }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default NoSSR;
