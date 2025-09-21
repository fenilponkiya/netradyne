"use client";
import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Typography, Container } from "@/components/ui";

const TestimonialCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.dark,
  borderRadius: "16px",
  padding: theme.spacing(4),
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

const VideoCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.light,
  borderRadius: "16px",
  padding: theme.spacing(4),
  textAlign: "center",
  position: "relative",
}));

const VideoThumbnail = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "300px",
  borderRadius: "12px",
  background: "linear-gradient(135deg, #7cb342 0%, #8bc34a 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  marginBottom: theme.spacing(3),
  cursor: "pointer",
}));

const CustomerTestimonials: React.FC = () => {
  const testimonials = [
    {
      company: "LOOMIS",
      quote:
        "We didn't buy a product. We bought a partnership that, you know, we're going to invest in for the years to come.",
      author: "Randy Sheltra",
      title: "EVP OF RISK MANAGEMENT AT LOOMIS",
      hasVideo: true,
    },
    {
      company: "KNIGHT",
      quote:
        "At Knight Transportation and Swift Transportation, safety is a top priority, and Netradyne is an unmatched investment in cutting-edge AI technology made them the clear choice for our fleets.",
      author: "David Tillman",
      title: "SVP Safety & Driver Development at Knight-Swift Transportation",
      hasVideo: false,
    },
    {
      company: "LOAD ONE",
      quote:
        "There's no question we can look at our accident rates before we had the cameras and then after and see a direct correlation in the reduction of accidents and the number of incidents.",
      author: "John Elliott",
      title: "CEO at Load One Transportation & Logistics",
      hasVideo: false,
    },
    {
      company: "LOOMIS",
      quote:
        "The key to getting your drivers and managers on board with video telematics is to just be open and transparent throughout the process. Let them know why you're implementing the technology, and what the benefits are.",
      author: "Randall Sheltra",
      title: "EVP Risk Management at Loomis",
      hasVideo: false,
    },
  ];

  return (
    <Container size="xl">
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          variant="h2"
          sx={{
            mb: 4,
          }}
        >
          Why customers partner <br /> with Netradyne.
        </Typography>
      </Box>

      <Box sx={{ mb: 6 }}>
        <VideoCard>
          <VideoThumbnail></VideoThumbnail>

          <Box sx={{ textAlign: "left" }}>
            <Typography variant="body2" color="white" weight="bold">
              LOOMIS
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 3,
                lineHeight: 1.4,
              }}
            >
              &ldquo;{testimonials[0].quote}&rdquo;
            </Typography>

            <Typography
              variant="body2"
              weight="medium"
              sx={{
                mb: 1,
              }}
            >
              {testimonials[0].author}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                textTransform: "uppercase",
                fontSize: "0.75rem",
                letterSpacing: "1px",
              }}
            >
              {testimonials[0].title}
            </Typography>
          </Box>
        </VideoCard>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 4,
        }}
      >
        {testimonials.slice(1).map((testimonial, index) => (
          <TestimonialCard key={index}>
            <Typography variant="body2" color="white" weight="bold">
              {testimonial.company}
            </Typography>
            <Box>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                {testimonial.author}
              </Typography>

              <Typography
                variant="body2"
                color="secondary"
                sx={{
                  textTransform: "uppercase",
                  fontSize: "0.75rem",
                  letterSpacing: "1px",
                  mb: 1,
                }}
              >
                {testimonial.title}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              color="white"
              sx={{
                fontWeight: 500,
                mb: 3,
                flexGrow: 1,
                lineHeight: 1.6,
              }}
            >
              &ldquo;{testimonial.quote}&rdquo;
            </Typography>
          </TestimonialCard>
        ))}
      </Box>
    </Container>
  );
};

export default CustomerTestimonials;
