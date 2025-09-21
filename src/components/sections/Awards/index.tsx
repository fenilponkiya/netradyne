"use client";
import React from "react";
import { Box, Divider } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Typography, Container } from "@/components/ui";
import Image from "next/image";

const AwardsSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  position: "relative",
}));

const AwardCard = styled(Box)(({}) => ({
  textAlign: "center",
}));

const AwardIcon = styled(Box)(({}) => ({
  margin: "0 auto 24px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Awards: React.FC = () => {
  const awards = [
    {
      icon: "https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/66b27b8b5d7fd00fe2f846f7_b3e505fc8074a6c91895265cd5399555_Netradyne_Accolade_4.avif",
      title: "Forbes Best Startup Employers List",
      years: "2023 - 2025",
    },
    {
      icon: "https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/67b68a7559792c7177f77885_Netradyne_HDT_Top_20_Products_2025.webp",
      title: "HDT Top 20 Products",
      years: "2025",
    },
    {
      icon: "https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/6737e80417cdd8827df7f9c5_Netradyne_Accolade_1.webp",
      title: "Gold Stevie® Award",
      years: "2024",
    },
    {
      icon: "https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/6737e8047aecc741f04c0e4d_841458983ec119ce3513d47855657589_Netradyne_Accolade_3.avif",
      title: "AI Safety Solution of the Year",
      years: "2025",
    },
  ];
  const theme = useTheme();
  return (
    <AwardsSection>
      <Container size="xl">
        <Divider sx={{ height: "2px" }} />

        <Box
          sx={{
            py: 8,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 2fr" },
            gap: { xs: 6, lg: 8 },
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="body2"
              color="secondary"
              weight="medium"
              mb={2}
            >
              AWARDS & ACCOLADES
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.primary,
                fontSize: "1.125rem",
                lineHeight: 1.6,
                maxWidth: "400px",
              }}
            >
              Better road safety is thanks enough, but awards are nice too. Our
              honors include being an industry leader in fleet safety solutions,
              a trusted service provider and an employer of distinction.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: { xs: 3, md: 4 },
              justifyItems: "center",
            }}
          >
            {awards.map((award, index) => (
              <AwardCard key={index}>
                <AwardIcon>
                  <Box
                    sx={{
                      position: "relative",
                      width: "120px",
                      height: "120px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={award.icon}
                      alt={award.title}
                      fill
                      style={{
                        objectFit: "contain",
                        objectPosition: "center",
                      }}
                      sizes="120px"
                    />
                  </Box>
                </AwardIcon>

                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    textAlign: "center",
                    mb: 1,
                    lineHeight: 1.3,
                  }}
                >
                  {award.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.dark,
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    textAlign: "center",
                  }}
                >
                  {award.years}
                </Typography>
              </AwardCard>
            ))}
          </Box>
        </Box>
        <Divider sx={{ height: "2px" }} />
      </Container>
    </AwardsSection>
  );
};

export default Awards;
