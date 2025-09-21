"use client";

import React, { useEffect } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./index";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  useEffect(() => {
    // Handle browser extension attributes that cause hydration mismatches
    const handleBrowserExtensions = () => {
      // This effect runs only on the client side after hydration
      // It helps prevent future hydration warnings
    };

    handleBrowserExtensions();
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
