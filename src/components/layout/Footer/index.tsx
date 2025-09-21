"use client";
import React from "react";
import { Box, Link, IconButton, Divider } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Typography, Container } from "@/components/ui";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";

const FooterSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.text.secondary,
  position: "relative",
}));

const LegalSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.text.secondary,
  paddingTop: theme.spacing(4),
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
}));

const FooterGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: theme.spacing(6),
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr 1fr",
    gap: theme.spacing(4),
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: theme.spacing(4),
  },
}));

const FooterColumn = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  opacity: 0.5,
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: "none",
  marginBottom: theme.spacing(1.5),
  fontSize: "0.9rem",
  transition: "color 0.2s ease",
  cursor: "pointer",
}));

const SocialIconsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  marginTop: theme.spacing(4),
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  color: theme.palette.text.secondary,
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}));

const BottomSection = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: theme.spacing(2),
  paddingTop: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const LegalLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(3),
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: theme.spacing(2),
  },
}));

const LegalText = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const Footer: React.FC = () => {
  const footerSections = {
    solutions: {
      title: "Solutions",
      links: [
        "Fleet Safety",
        "Compliance",
        "Fleet Management",
        "Integrations",
        "Insurance",
      ],
    },
    industries: {
      title: "Industries",
      links: [
        "Concrete",
        "Construction",
        "Delivery Vehicles",
        "Field Services",
        "Food & Beverage",
        "Oil & Gas",
        "Passenger Transit",
        "School Transportation",
        "Trucking & Logistics",
        "Waste",
        "Wholesale-Retail",
      ],
    },
    features: {
      title: "Features",
      links: [
        "Driver Self Coaching",
        "Managed Coaching",
        "GreenZone Score",
        "Video Access",
        "GPS Tracking",
        "Vehicle Alerts",
      ],
    },
    products: {
      title: "Products",
      links: [
        "Fleet Camera System",
        "Driver Drowsiness with DMS Sensor",
        "Driveri Hub-X",
      ],
    },
    resources: {
      title: "Resources",
      links: [
        "Customer Stories",
        "Case Studies",
        "Reports",
        "Guides",
        "Webinars",
        "Video Library",
        "Events",
        "Support",
        "API Docs",
      ],
    },
    company: {
      title: "Company",
      links: ["About", "Careers", "News & Press", "Contact"],
    },
  };

  const legalDisclosures = [
    "* Individual results and operational use may vary.",
    "** Safe driver coaching features may vary across different Netradyne devices and integrations.",
    "† Netradyne must receive written approval to share client data.",
    "",
    "Product may be the Netradyne proprietary and may not be an exact representation of a product.",
  ];
  const theme = useTheme();

  return (
    <>
      <LegalSection>
        <Container size="xl">
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: "bold",
              mb: 3,
            }}
          >
            Legal Disclaimers
          </Typography>
          {legalDisclosures.map((text, index) => (
            <LegalText key={index}>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  opacity: 0.5,
                  fontSize: "0.8rem",
                  lineHeight: 1.5,
                }}
              >
                {text}
              </Typography>
            </LegalText>
          ))}
        </Container>
      </LegalSection>

      <FooterSection>
        <Container size="xl">
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ mb: 6 }}>
              <Image
                width={200}
                height={200}
                src="https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/66df48efe6d495ab10d44241_Netradyne_Full-Logo_White-Green.svg"
                alt="logo"
                style={{ maxWidth: "100%" }}
              />
            </Box>

            <FooterGrid>
              <FooterColumn>
                <FooterTitle variant="footerTitle">
                  {footerSections.solutions.title}
                </FooterTitle>
                {footerSections.solutions.links.map((link, index) => (
                  <FooterLink key={index}>{link}</FooterLink>
                ))}
              </FooterColumn>

              <FooterColumn>
                <FooterTitle>{footerSections.industries.title}</FooterTitle>
                {footerSections.industries.links.map((link, index) => (
                  <FooterLink key={index}>{link}</FooterLink>
                ))}
              </FooterColumn>

              <FooterColumn>
                <FooterTitle>{footerSections.features.title}</FooterTitle>
                {footerSections.features.links.map((link, index) => (
                  <FooterLink key={index}>{link}</FooterLink>
                ))}

                <FooterTitle sx={{ mt: 4 }}>
                  {footerSections.products.title}
                </FooterTitle>
                {footerSections.products.links.map((link, index) => (
                  <FooterLink key={index}>{link}</FooterLink>
                ))}
              </FooterColumn>

              <FooterColumn>
                <FooterTitle>{footerSections.resources.title}</FooterTitle>
                {footerSections.resources.links
                  .slice(0, 6)
                  .map((link, index) => (
                    <FooterLink key={index}>{link}</FooterLink>
                  ))}

                <FooterTitle sx={{ mt: 4 }}>
                  {footerSections.company.title}
                </FooterTitle>
                {footerSections.company.links.map((link, index) => (
                  <FooterLink key={index}>{link}</FooterLink>
                ))}
              </FooterColumn>
            </FooterGrid>

            <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 2 }}>
              <SocialIconsContainer>
                <SocialIcon>
                  <LinkedInIcon sx={{ fontSize: "20px" }} />
                </SocialIcon>
                <SocialIcon>
                  <FacebookIcon sx={{ fontSize: "20px" }} />
                </SocialIcon>
                <SocialIcon>
                  <InstagramIcon sx={{ fontSize: "20px" }} />
                </SocialIcon>
                <SocialIcon>
                  <YouTubeIcon sx={{ fontSize: "20px" }} />
                </SocialIcon>
              </SocialIconsContainer>
            </Box>
            <Divider sx={{ height: "2px" }} />

            <BottomSection>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "0.9rem",
                }}
              >
                All Rights Reserved 2025 © Netradyne
              </Typography>

              <LegalLinks>
                <FooterLink sx={{ mb: 0 }}>Privacy</FooterLink>
                <FooterLink sx={{ mb: 0 }}>Cookies</FooterLink>
                <FooterLink sx={{ mb: 0 }}>Security</FooterLink>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: "0.9rem",
                    }}
                  >
                    🇺🇸 United States
                  </Typography>
                </Box>
              </LegalLinks>
            </BottomSection>
          </Box>
        </Container>
      </FooterSection>
    </>
  );
};

export default Footer;
