"use client";
import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Typography, Container } from "@/components/ui";
import Image from "next/image";

const WhyNetradyneSection = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  color: theme.palette.text.secondary,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  position: "relative",
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2, 1),
}));

const WhyNetradyne: React.FC = () => {
  const features = [
    {
      icon: "https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/66aaadd8c86ec0f7ad558bf3_Netradyne_Construction_Vertical_Site_Security_Icon.svg",
      title: "Elevate safety",
      description:
        "Unite your team around a safety-first culture. We recognize and reward safe driving behavior, with curated insights to help you journey toward safer roads.",
    },
    {
      icon: "https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/66b54951f18e313b19a08f83_Netradyne_Profitability_Icon_Dark.svg",
      title: "Increase profitability",
      description:
        "Reduce incidents, resolve insurance claims more quickly, decrease the chance of litigation and boost profits through improved operational efficiency.",
    },
    {
      icon: "https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/66b54951f18e313b19a08f83_Netradyne_Profitability_Icon_Dark.svg",
      title: "Enable transparency",
      description:
        "Ground conversations in facts to eliminate unfair judgement. With full context and accurate information, deliver and managers engage in cleaner, more productive discussions.",
    },
  ];

  return (
    <WhyNetradyneSection>
      <Container size="xl">
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography variant="h2" color="white">
            Why Netradyne?
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 6,
          }}
        >
          {features.map((feature, index) => (
            <Box key={index}>
              <FeatureCard>
                <Image src={feature.icon} alt="logo" height={50} width={50} />

                <Typography
                  variant="h5"
                  color="white"
                  weight="bold"
                  sx={{ mb: 2 }}
                >
                  {feature.title}
                </Typography>

                <Typography variant="body1" color="white" sx={{ opacity: 0.6 }}>
                  {feature.description}
                </Typography>
              </FeatureCard>
            </Box>
          ))}
        </Box>
      </Container>
    </WhyNetradyneSection>
  );
};

export default WhyNetradyne;
