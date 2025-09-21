"use client";
import React from "react";
import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export interface CustomIconButtonProps extends MuiIconButtonProps {
  variant?: "default" | "social" | "globe" | "primary" | "secondary";
  customSize?: "small" | "medium" | "large";
}

const StyledIconButton = styled(MuiIconButton)<{
  customvariant?: string;
  size?: string;
}>(({ theme, customvariant, size }) => ({
  ...(size === "small" && {
    width: "32px",
    height: "32px",
    padding: "4px",
  }),
  ...(size === "medium" && {
    width: "40px",
    height: "40px",
    padding: "8px",
  }),
  ...(size === "large" && {
    width: "48px",
    height: "48px",
    padding: "12px",
  }),

  ...(customvariant === "social" && {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: theme.palette.text.secondary,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.main,
    },
  }),
  ...(customvariant === "globe" && {
    color: theme.palette.primary.light,
    border: `1px solid ${theme.palette.primary.light}`,
    "&:hover": {
      backgroundColor: "rgba(76, 175, 80, 0.1)",
    },
  }),
  ...(customvariant === "primary" && {
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: "rgba(44, 75, 71, 0.1)",
    },
  }),
  ...(customvariant === "secondary" && {
    color: theme.palette.primary.light,
    "&:hover": {
      backgroundColor: "rgba(76, 175, 80, 0.1)",
    },
  }),
}));

const IconButton: React.FC<CustomIconButtonProps> = ({
  variant = "default",
  customSize = "medium",
  children,
  className,
  ...props
}) => {
  const getClassName = () => {
    const baseClass = className || "";
    if (variant === "social") return `${baseClass} social-icon`.trim();
    if (variant === "globe") return `${baseClass} globe-icon`.trim();
    return baseClass;
  };

  return (
    <StyledIconButton
      customvariant={variant}
      size={customSize}
      className={getClassName()}
      {...props}
    >
      {children}
    </StyledIconButton>
  );
};

export default IconButton;
