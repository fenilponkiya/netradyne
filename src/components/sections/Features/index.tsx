"use client";

import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Button, Typography, Container } from "@/components/ui";
import Image from "next/image";

const FeaturesSection = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(10),
  backgroundColor: theme.palette.background.default,
}));

const FeatureRow = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(8),
  alignItems: "center",
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "1fr 1fr",
  },
  "&:nth-of-type(even)": {
    [theme.breakpoints.up("lg")]: {
      "& > div:first-of-type": {
        order: 2,
      },
      "& > div:last-of-type": {
        order: 1,
      },
    },
  },
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  overflow: "hidden",
  height: "400px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const FeatureContent = styled(Box)(({ theme }) => ({
  maxWidth: "500px",
}));

const Features: React.FC = () => {
  const features = [
    {
      category: "CONTEXT & CLARITY",
      title: "Capturing less than 100% of the situation makes 0% sense.",
      description:
        "Captures and analyzes 100% of drive time, so you have full confidence and context for making important decisions.",
      link: "Learn More",
      image:
        "https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/6737ebd2f3ccf062e94cb9f5_Netradyne_Homepage_Image_3.webp",
    },
    {
      category: "SELF-MANAGED DRIVER COACHING",
      title: "Give drivers the freedom they want.",
      description:
        "Drivers receive in-cab alerts, with a grace period to self-correct. They can check their own score and see tips for improvement automatically in their scorecard.",
      link: "Learn More",
      image:
        "https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/6737ebd2e460f410ac994959_Netradyne_Homepage_Image_4.webp",
    },
    {
      category: "MANAGED COACHING",
      title: "Get your drivers home safe & happy.",
      description:
        "You have to enforce compliance. To be more effective, reward the positive, coach the negative, and be confident in basing it all on the most accurate driver score built on safe driving.",
      link: "Learn More",
      image:
        "https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/67380d8de786c44d2f98339b_Netradyne_Homepage_Image_5.webp",
    },
    {
      category: "GREENZONE® SCORE",
      title: "Motivate & retain your best drivers.",
      description:
        "The GreenZone Score makes safety simple, automated, and engaging. With full transparency into how scores are calculated, drivers clearly understand what impacts their performance—building trust from day one.",
      link: "Learn More",
      image:
        "https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/6737ebd28df07b118f13a93d_Netradyne_Homepage_Image_7.webp",
    },
    {
      category: "COMPLETE FLEET MANAGEMENT",
      title: "Reduce costs and downtime with fuel and maintenance insights.",
      description:
        "Improve fuel economy and prioritize vehicle maintenance from a single dashboard. Recognize, reward, and coach on safe, fuel-efficient driving. Ensure vehicles are road-ready and on time with full fleet visibility.",
      link: "Learn More",
      image:
        "https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/6737ebd2e5de7d9524d674bb_Netradyne_Homepage_Image_6.webp",
    },
    {
      category: "STREAMLINED COMPLIANCE",
      title: "Minimize manual processes,maximize compliance",
      description:
        "Certified ELD with seamless Hours of Service, DVIR, and IFTA compliance. One device, one platform—keeping fleets audit-ready and free from costly violations.",
      link: "Learn More",
      image:
        "https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/66d0f66628ba5335e1d167b5_Netradyne_Fleet_Management_Image_4.avif",
    },
  ];

  return (
    <FeaturesSection>
      <Container size="xl">
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography variant="h2" color="primary" weight="bold" sx={{ mb: 3 }}>
            The visibility you need for
            <br />
            peak safety & performance.
          </Typography>
          <Typography
            variant="body1"
            color="text"
            sx={{ fontSize: "1.125rem", maxWidth: "600px", mx: "auto" }}
          >
            One platform to protect your drivers and profits—with AI-powered
            safety, coaching workflows, and fleet management.
          </Typography>
        </Box>

        {features.map((feature, index) => (
          <FeatureRow key={index}>
            <FeatureCard>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: { xs: "4 / 3", md: "16 / 9" },
                  overflow: "hidden",
                  borderRadius: "12px",
                }}
              >
                <Image
                  src={feature.image}
                  fill={true}
                  alt={feature.title}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Box>
            </FeatureCard>

            <FeatureContent>
              <Typography
                variant="body2"
                color="secondary"
                weight="medium"
                sx={{ mb: 2, textTransform: "uppercase", letterSpacing: "1px" }}
              >
                {feature.category}
              </Typography>

              <Typography
                variant="h3"
                color="primary"
                weight="medium"
                sx={{ mb: 1 }}
              >
                {feature.title}
              </Typography>

              <Typography
                variant="body1"
                color="text"
                sx={{ mb: 4, lineHeight: 1.6 }}
              >
                {feature.description}
              </Typography>

              <Typography variant="body2" color="primary" weight="medium">
                {feature.link + "    " + ">"}
              </Typography>
            </FeatureContent>
          </FeatureRow>
        ))}
      </Container>
    </FeaturesSection>
  );
};

export default Features;
