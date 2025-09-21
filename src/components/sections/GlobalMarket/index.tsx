"use client";
import React from "react";
import { Box } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Button, Typography, Container } from "@/components/ui";
import Image from "next/image";

const GlobalSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,

  position: "relative",
}));

const MapContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  aspectRatio: "2 / 1",
  marginBottom: theme.spacing(6),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  borderRadius: theme.shape.borderRadius,
}));

const GlobalMarket: React.FC = () => {
  const theme = useTheme();
  return (
    <GlobalSection>
      <Container size="xl">
        <MapContainer>
          <Image
            alt="Global reach map showing Netradyne's worldwide presence"
            fill={true}
            src="https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/6737e5b233638fa9e391a2cb_6706e4471f1d73683ae1f706_Netradyne_Global_Reach_Map.webp"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            priority={false}
          />
        </MapContainer>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              lineHeight: 1.2,
              mb: 4,
            }}
          >
            We serve the global market.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1.125rem",
              lineHeight: 1.6,
              maxWidth: "800px",
              mx: "auto",
              mb: 4,
            }}
          >
            From small family-owned companies to large enterprise corporations,
            our team of trained sales reps and technicians will work to
            understand your business and ensure you make strategically sound
            decisions tailored to your global needs.
          </Typography>

          <Button
            size="medium"
            sx={{
              backgroundColor: "transparent",
              color: theme.palette.text.primary,
              border: `1px solid ${theme.palette.text.dark}`,
              fontWeight: 500,
              borderRadius: "50px",
              fontSize: "14px",
              padding: "5px 12px",
              textTransform: "none",
              ":hover": {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
            }}
          >
            Learn More About Our Customers
          </Button>
        </Box>
      </Container>
    </GlobalSection>
  );
};

export default GlobalMarket;
