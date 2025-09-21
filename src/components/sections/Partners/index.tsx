"use client";
import { Container } from "@/components/ui";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import React from "react";

const PartnersSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

const LogoGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: theme.spacing(4),
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

const Partners: React.FC = () => {
  const partners = [
    {
      name: "SWIFT",
      logo: "https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/6786d5e4514e69d7a7d2569e_Netradyne_Swift_Transportation_Customer_Stories_Logo.avif",
    },
    {
      name: "KNIGHT",
      logo: "https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/6786d5e456fc21024da918ab_Netradyne_Knight_Transportation_Customer_Stories_Logo.avif",
    },
    {
      name: "LOAD ONE",
      logo: "https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/66d8e53d8dd3f82ebc265f23_Netradyne_Load_One_Transportation_%26_Logistics_Customer_Stories_Logo.avif",
    },
    {
      name: "STS",
      logo: "https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/6705d248453cb6e31485ff02_Netradyne_STS_Electronic_Recycling_Customer_Stories_Logo.avif",
    },
    {
      name: "PROSERV",
      logo: "https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/6705d247e35b6cf9d1432df6_Netradyne_ProServ_Pest_Management_Customer_Stories_Logo.png",
    },
    {
      name: "LOOMIS",
      logo: "https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/67c1ff230633f24768d97392_Netradyne_Loomis_International_Customer_Stories_Logo.png",
    },
    {
      name: "BOYLE",
      logo: "https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/6705d212f6900c6373a74056_Netradyne_Boyle_Transportation_Customer_Stories_Logo.avif",
    },
    {
      name: "VASCOR",
      logo: "https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/66d8e5b832f49dfbbdf85eb3_Netradyne_Vascor_Transport_Customer_Stories_Logo.png",
    },
  ];

  return (
    <PartnersSection>
      <Container size="xl">
        <LogoGrid>
          {partners.map((partner, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Image src={partner.logo} alt="logo" height={150} width={150} />{" "}
            </Box>
          ))}
        </LogoGrid>
      </Container>
    </PartnersSection>
  );
};

export default Partners;
