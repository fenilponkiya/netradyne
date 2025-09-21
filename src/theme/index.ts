"use client";

import { createTheme, ThemeOptions } from "@mui/material/styles";
import { Public_Sans } from "next/font/google";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
  interface TypeText {
    dark: string;
  }
  interface TypeBackground {
    light: string;
    dark: string;
  }
}

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#1c282d",
      light: "#4dc160",
      dark: "#141e22",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#243339",
      light: "#4CAF50",
      dark: "#388E3C",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#efefef",
      light: "#ffffff",
      paper: "#1c282d",
      dark: "#37484f",
    },
    text: {
      primary: "#1c282d",
      dark: "#4dc160",
      secondary: "#FFFFFF",
    },
    info: {
      main: "#ffffff",
      light: "rgba(255, 255, 255, 0.8)",
      dark: "rgba(255, 255, 255, 0.7)",
      contrastText: "#1c282d",
    },
  },
  typography: {
    fontFamily: publicSans.style.fontFamily,

    h1: {
      fontSize: "3.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      color: "#1c282d",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
      color: "#1c282d",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.4,
      color: "#1c282d",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
      color: "#1c282d",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.5,
      color: "#1c282d",
    },
    h6: {
      fontSize: "1.125rem",
      fontWeight: 600,
      lineHeight: 1.5,
      color: "#1c282d",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#1c282d",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
      color: "#1c282d",
    },
    button: {
      fontSize: "1rem",
      fontWeight: 600,
      textTransform: "none" as const,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    "none",
    "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)",
    "0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)",
    "0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)",
    "0px 14px 28px rgba(0, 0, 0, 0.25), 0px 10px 10px rgba(0, 0, 0, 0.22)",
    "0px 19px 38px rgba(0, 0, 0, 0.30), 0px 15px 12px rgba(0, 0, 0, 0.22)",
    "0px 4px 8px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.08)",
    "0px 6px 12px rgba(0, 0, 0, 0.15), 0px 3px 6px rgba(0, 0, 0, 0.10)",
    "0px 8px 16px rgba(0, 0, 0, 0.15), 0px 4px 8px rgba(0, 0, 0, 0.12)",
    "0px 10px 20px rgba(0, 0, 0, 0.15), 0px 5px 10px rgba(0, 0, 0, 0.12)",
    "0px 12px 24px rgba(0, 0, 0, 0.15), 0px 6px 12px rgba(0, 0, 0, 0.12)",
    "0px 16px 32px rgba(0, 0, 0, 0.15), 0px 8px 16px rgba(0, 0, 0, 0.12)",
    "0px 20px 40px rgba(0, 0, 0, 0.15), 0px 10px 20px rgba(0, 0, 0, 0.12)",
    "0px 24px 48px rgba(0, 0, 0, 0.15), 0px 12px 24px rgba(0, 0, 0, 0.12)",
    "0px 28px 56px rgba(0, 0, 0, 0.15), 0px 14px 28px rgba(0, 0, 0, 0.12)",
    "0px 32px 64px rgba(0, 0, 0, 0.15), 0px 16px 32px rgba(0, 0, 0, 0.12)",
    "0px 36px 72px rgba(0, 0, 0, 0.15), 0px 18px 36px rgba(0, 0, 0, 0.12)",
    "0px 40px 80px rgba(0, 0, 0, 0.15), 0px 20px 40px rgba(0, 0, 0, 0.12)",
    "0px 44px 88px rgba(0, 0, 0, 0.15), 0px 22px 44px rgba(0, 0, 0, 0.12)",
    "0px 48px 96px rgba(0, 0, 0, 0.15), 0px 24px 48px rgba(0, 0, 0, 0.12)",
    "0px 52px 104px rgba(0, 0, 0, 0.15), 0px 26px 52px rgba(0, 0, 0, 0.12)",
    "0px 56px 112px rgba(0, 0, 0, 0.15), 0px 28px 56px rgba(0, 0, 0, 0.12)",
    "0px 60px 120px rgba(0, 0, 0, 0.15), 0px 30px 60px rgba(0, 0, 0, 0.12)",
    "0px 64px 128px rgba(0, 0, 0, 0.15), 0px 32px 64px rgba(0, 0, 0, 0.12)",
    "0px 68px 136px rgba(0, 0, 0, 0.15), 0px 34px 68px rgba(0, 0, 0, 0.12)",
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "12px 24px",
          fontSize: "1rem",
          fontWeight: 600,
          textTransform: "none",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
          },
        },
        containedPrimary: {
          backgroundColor: "#1c282d",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#1A2E2B",
          },
        },
        containedSecondary: {
          backgroundColor: "#4CAF50",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#388E3C",
          },
        },
        outlinedPrimary: {
          borderColor: "#1c282d",
          color: "#1c282d",
          "&:hover": {
            backgroundColor: "#F8F9FA",
            borderColor: "#1A2E2B",
          },
        },
        textPrimary: {
          color: "#1c282d",
          "&:hover": {
            backgroundColor: "#F8F9FA",
          },
        },
      },
      variants: [
        {
          props: { variant: "contained", size: "large" },
          style: {
            padding: "16px 32px",
            fontSize: "1.125rem",
          },
        },
        {
          props: { variant: "contained", size: "small" },
          style: {
            padding: "8px 16px",
            fontSize: "0.875rem",
          },
        },
        {
          props: { color: "success" },
          style: {
            backgroundColor: "#00ff88",
            color: "#1a2e2c",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#00cc6a",
            },
          },
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          transition: "all 0.2s ease",
        },
      },
      variants: [
        {
          props: { color: "primary" },
          style: {
            color: "#1c282d",
            "&:hover": {
              backgroundColor: "rgba(44, 75, 71, 0.1)",
            },
          },
        },
        {
          props: { color: "secondary" },
          style: {
            color: "#4CAF50",
            "&:hover": {
              backgroundColor: "rgba(76, 175, 80, 0.1)",
            },
          },
        },
        {
          props: { className: "social-icon" },
          style: {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            color: "#ffffff",
            width: "40px",
            height: "40px",
            "&:hover": {
              backgroundColor: "#00ff88",
              color: "#1a2e2c",
            },
          },
        },
        {
          props: { className: "globe-icon" },
          style: {
            color: "#00ff88",
            border: "1px solid #00ff88",
            borderRadius: "8px",
            width: "40px",
            height: "40px",
            "&:hover": {
              backgroundColor: "rgba(0, 255, 136, 0.1)",
            },
          },
        },
      ],
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(255, 255, 255, 0.2)",
          backgroundColor: "#1c282d",
          opacity: 0.1,
        },
      },
      variants: [
        {
          props: { orientation: "vertical" },
          style: {
            height: "24px",
            alignSelf: "center",
          },
        },
      ],
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: "12px",
          minWidth: "200px",
          marginTop: "8px",
          boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.12)",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: "12px 16px",
          fontSize: "0.875rem",
          "&:hover": {
            backgroundColor: "rgba(76, 175, 80, 0.08)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1a2e2c",
          color: "#FFFFFF",
          boxShadow: "none",
        },
      },
      variants: [
        {
          props: { position: "sticky" },
          style: {
            backgroundColor: "#1a2e2c",
          },
        },
      ],
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: "80px !important",
          padding: "0 16px",
          "@media (min-width: 1024px)": {
            padding: "0 32px",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: "3.5rem",
          "@media (max-width: 768px)": {
            fontSize: "2.5rem",
          },
          "@media (max-width: 480px)": {
            fontSize: "2rem",
          },
        },
        h2: {
          fontSize: "2.5rem",
          "@media (max-width: 768px)": {
            fontSize: "2rem",
          },
          "@media (max-width: 480px)": {
            fontSize: "1.75rem",
          },
        },
        h3: {
          fontSize: "2rem",
          "@media (max-width: 768px)": {
            fontSize: "1.75rem",
          },
          "@media (max-width: 480px)": {
            fontSize: "1.5rem",
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "16px",
          paddingRight: "16px",
          "@media (min-width: 640px)": {
            paddingLeft: "24px",
            paddingRight: "24px",
          },
          "@media (min-width: 1024px)": {
            paddingLeft: "32px",
            paddingRight: "32px",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
          border: "1px solid #E5E7EB",
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
