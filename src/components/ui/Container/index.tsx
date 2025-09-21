"use client";
import React from "react";
import {
  Container as MuiContainer,
  ContainerProps as MuiContainerProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export interface CustomContainerProps extends MuiContainerProps {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: "none" | "small" | "medium" | "large";
}

const StyledContainer = styled(MuiContainer)<CustomContainerProps>(
  ({ theme, size, padding }) => ({
    ...(size === "sm" && {
      maxWidth: "640px !important",
    }),
    ...(size === "md" && {
      maxWidth: "768px !important",
    }),
    ...(size === "lg" && {
      maxWidth: "1024px !important",
    }),
    ...(size === "xl" && {
      maxWidth: "1280px !important",
    }),
    ...(size === "full" && {
      maxWidth: "none !important",
    }),
    ...(padding === "none" && {
      padding: "0 !important",
    }),
    ...(padding === "small" && {
      padding: "16px !important",
      [theme.breakpoints.up("sm")]: {
        padding: "24px !important",
      },
    }),
    ...(padding === "medium" && {
      padding: "24px !important",
      [theme.breakpoints.up("sm")]: {
        padding: "32px !important",
      },
      [theme.breakpoints.up("lg")]: {
        padding: "48px !important",
      },
    }),
    ...(padding === "large" && {
      padding: "32px !important",
      [theme.breakpoints.up("sm")]: {
        padding: "48px !important",
      },
      [theme.breakpoints.up("lg")]: {
        padding: "64px !important",
      },
    }),
  })
);

const Container: React.FC<CustomContainerProps> = ({
  size = "xl",
  padding = "medium",
  children,
  ...props
}) => {
  return (
    <StyledContainer size={size} padding={padding} {...props}>
      {children}
    </StyledContainer>
  );
};

export default Container;
