"use client";
import React from "react";
import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export interface CustomTypographyProps
  extends Omit<MuiTypographyProps, "variant"> {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "overline"
    | "sectionTitle"
    | "heroTitle"
    | "cardTitle"
    | "footerTitle"
    | "testimonialQuote"
    | "legalText";
  color?: "primary" | "secondary" | "text" | "inherit" | "white" | "info";
  weight?: "light" | "regular" | "medium" | "semiBold" | "bold";
  align?: "left" | "center" | "right" | "justify" | "inherit";
}

const StyledTypography = styled(MuiTypography)<{
  customcolor?: string;
  weight?: string;
  customvariant?: string;
}>(({ theme, customcolor, weight, customvariant }) => ({
  ...(customcolor === "primary" && {
    color: theme.palette.text.primary,
  }),
  ...(customcolor === "secondary" && {
    color: theme.palette.text.dark,
  }),
  ...(customcolor === "text" && {
    color: theme.palette.text.primary,
  }),
  ...(customcolor === "white" && {
    color: theme.palette.text.secondary,
  }),
  ...(customcolor === "info" && {
    color: theme.palette.info.main,
  }),

  ...(weight === "light" && {
    fontWeight: 300,
  }),
  ...(weight === "regular" && {
    fontWeight: 400,
  }),
  ...(weight === "medium" && {
    fontWeight: 500,
  }),
  ...(weight === "semiBold" && {
    fontWeight: 600,
  }),
  ...(weight === "bold" && {
    fontWeight: 700,
  }),

  ...(customvariant === "sectionTitle" && {
    fontSize: "0.875rem",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: theme.palette.primary.light,
    marginBottom: theme.spacing(2),
  }),
  ...(customvariant === "heroTitle" && {
    fontSize: "4rem",
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  }),
  ...(customvariant === "cardTitle" && {
    fontSize: "1.5rem",
    fontWeight: 700,
    lineHeight: 1.4,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1.5),
  }),
  ...(customvariant === "footerTitle" && {
    fontSize: "1rem",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(3),
  }),
  ...(customvariant === "testimonialQuote" && {
    fontSize: "1.5rem",
    fontWeight: 500,
    lineHeight: 1.4,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(3),
  }),
  ...(customvariant === "legalText" && {
    fontSize: "0.8rem",
    lineHeight: 1.5,
    color: "rgba(255, 255, 255, 0.7)",
  }),
}));

const Typography: React.FC<CustomTypographyProps> = ({
  variant = "body1",
  color = "inherit",
  weight = "regular",
  align = "inherit",
  children,
  ...props
}) => {
  const customVariants = [
    "sectionTitle",
    "heroTitle",
    "cardTitle",
    "footerTitle",
    "testimonialQuote",
    "legalText",
  ];
  const isCustomVariant = customVariants.includes(variant);

  return (
    <StyledTypography
      variant={isCustomVariant ? "body1" : (variant as MuiTypographyProps["variant"])}
      customcolor={color !== "inherit" ? color : undefined}
      weight={weight}
      customvariant={isCustomVariant ? variant : undefined}
      align={align}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
