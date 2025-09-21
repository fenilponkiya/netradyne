"use client";
import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export interface CustomButtonProps extends Omit<MuiButtonProps, "variant"> {
  variant?: "primary" | "secondary" | "outlined" | "text" | "ghost";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  loading?: boolean;
}

const StyledButton = styled(MuiButton)<{ customvariant?: string }>(
  ({ theme, customvariant }) => ({
    ...(customvariant === "primary" && {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    }),
    ...(customvariant === "secondary" && {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.secondary.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
      },
    }),
    ...(customvariant === "outlined" && {
      borderColor: theme.palette.secondary.light,
      color: theme.palette.secondary.light,
      backgroundColor: "transparent",
      border: "1px solid #4CAF50",
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.text.secondary,
      },
    }),
    ...(customvariant === "text" && {
      color: "inherit",
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      },
    }),
    ...(customvariant === "ghost" && {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: theme.palette.primary.contrastText,
      border: `1px solid rgba(255, 255, 255, 0.2)`,
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
      },
    }),
  })
);

const Button: React.FC<CustomButtonProps> = ({
  variant = "primary",
  size = "medium",
  loading = false,
  children,
  disabled,
  ...props
}) => {
  const getVariant = (): "contained" | "outlined" | "text" => {
    switch (variant) {
      case "primary":
      case "secondary":
      case "ghost":
        return "contained";
      case "outlined":
        return "outlined";
      case "text":
        return "text";
      default:
        return "contained";
    }
  };

  return (
    <StyledButton
      variant={getVariant()}
      size={size}
      disabled={disabled || loading}
      customvariant={variant}
      {...props}
    >
      {loading ? "Loading..." : children}
    </StyledButton>
  );
};

export default Button;
