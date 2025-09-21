"use client";
import React from "react";
import { Box as MuiBox, BoxProps as MuiBoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface CustomBoxProps extends MuiBoxProps {
  variant?:
    | "flexCenter"
    | "flexBetween"
    | "flexColumn"
    | "grid"
    | "section"
    | "card"
    | "hero"
    | "default";
  spacing?: number;
  responsive?: boolean;
}

const StyledBox = styled(MuiBox)<{
  customVariant?: string;
  spacing?: number;
  responsive?: boolean;
}>(({ theme, customVariant, spacing, responsive }) => ({
  ...(customVariant === "flexCenter" && {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing ? theme.spacing(spacing) : theme.spacing(2),
  }),
  ...(customVariant === "flexBetween" && {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: spacing ? theme.spacing(spacing) : theme.spacing(2),
    ...(responsive && {
      flexWrap: "wrap",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        textAlign: "center",
      },
    }),
  }),
  ...(customVariant === "flexColumn" && {
    display: "flex",
    flexDirection: "column",
    gap: spacing ? theme.spacing(spacing) : theme.spacing(2),
  }),
  ...(customVariant === "grid" && {
    display: "grid",
    gap: spacing ? theme.spacing(spacing) : theme.spacing(4),
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    ...(responsive && {
      [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr",
      },
    }),
  }),
  ...(customVariant === "section" && {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    position: "relative",
  }),
  ...(customVariant === "card" && {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "16px",
    padding: theme.spacing(4),
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
    border: "1px solid #E5E7EB",
  }),
  ...(customVariant === "hero" && {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(135deg, #2C4B47 0%, #1A2E2B 100%)",
    color: theme.palette.text.secondary,
  }),
}));

const Box: React.FC<CustomBoxProps> = ({
  variant = "default",
  spacing = 2,
  responsive = false,
  children,
  ...props
}) => {
  return (
    <StyledBox
      customVariant={variant}
      spacing={spacing}
      responsive={responsive}
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export default Box;
