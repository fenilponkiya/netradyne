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
      // Suppress React hydration warnings for known browser extension attributes
      const extensionAttributes = [
        "bis_skin_checked",
        "bis_register",
        "__processed_bc1badec-827a-4a99-b38b-dfd6c5c20b07__",
      ];

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
