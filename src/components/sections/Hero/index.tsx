"use client";
import React from "react";
import { Box, Divider } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Button, Typography, Container } from "@/components/ui";
import Image from "next/image";

const HeroSection = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  overflow: "hidden",
  color: theme.palette.text.secondary,
  paddingTop: "100px",
}));

const HeroImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  aspectRatio: "5 / 2",
  marginTop: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    marginRight: theme.spacing(10),
    marginLeft: theme.spacing(10),
  },
}));

const ContentSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  position: "relative",
}));

const VideoSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,

  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  marginTop: theme.spacing(8),
  borderRadius: "20px",
  position: "relative",
}));

const Hero: React.FC = () => {
  const stats = [
    {
      value: "~99%*",
      label: "Accuracy of alerts",
      icon: "https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/66b51f71e3eb4cd97745414c_Netradyne_Target_Icon_Light.svg",
    },
    {
      value: "100%",
      label: "Driving time analysis",
      icon: "https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/66b51f60f9626ca447bca8d6_Netradyne_Dynamic_Updates_Icon_Light.svg",
    },
    {
      value: "125M+",
      label: "DriverStars awarded",
      icon: "https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/66b51f6087f6fc79a5ad168b_Netradyne_Driver_Star_Icon_Light.svg",
    },
    {
      value: "25B+",
      label: "Driving miles analyzed",
      icon: "https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/66b5494fdf37727614b30bfe_Netradyne_Miles_Icon_Light.svg",
    },
  ];

  const theme = useTheme();
  return (
    <>
      <HeroSection>
        <Container size="xl">
          <HeroImageContainer>
            <Image
              src="https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/681e8489de6bd665ab917ad9_9a35bb8ac7ee6c0701076af720b36de0_Netradyne_Homepage_Hero_US.avif"
              alt="Netradyne Hero Image showcasing fleet management technology"
              fill
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </HeroImageContainer>

          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h1"
              color="white"
              weight="light"
              sx={{
                mb: 3,
                fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                lineHeight: 1.1,
              }}
            >
              Safety you can see.
              <br />
              Performance you can measure.
            </Typography>

            <Typography
              variant="body1"
              color="white"
              sx={{
                mb: 4,
                fontSize: "1.125rem",
                lineHeight: 1.6,
                opacity: 0.9,
                maxWidth: "800px",
                mx: "auto",
              }}
            >
              Equip fleets with instant AI-powered risk detection and
              full-context coaching along with fuel efficiency insights and
              proactive maintenance - on the only platform that recognizes and
              rewards safe driving. Cut incidents, engage drivers, and
              streamline operations to reduce costs, minimize downtime, and
              deliver measurable results.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                justifyContent: "center",
                mb: 4,
              }}
            >
              <Button
                variant="primary"
                size="medium"
                sx={{
                  backgroundColor: "transparent",
                  color: theme.palette.text.secondary,
                  border: `1px solid ${theme.palette.text.dark}`,
                  fontWeight: 600,
                  borderRadius: "50px",
                  fontSize: "14px",
                  padding: "5px 12px",
                  textTransform: "none",
                }}
              >
                Maximize Safety
              </Button>
              <Button
                variant="primary"
                size="medium"
                sx={{
                  backgroundColor: "transparent",
                  color: theme.palette.text.secondary,
                  border: `1px solid ${theme.palette.text.dark}`,
                  fontWeight: 600,
                  borderRadius: "50px",
                  fontSize: "14px",
                  padding: "5px 12px",
                  textTransform: "none",
                }}
              >
                Drive Efficiency
              </Button>
              <Button
                variant="primary"
                size="medium"
                sx={{
                  backgroundColor: "transparent",
                  color: theme.palette.text.secondary,
                  border: `1px solid ${theme.palette.text.dark}`,
                  fontWeight: 600,
                  borderRadius: "50px",
                  fontSize: "14px",
                  padding: "5px 12px",
                  textTransform: "none",
                }}
              >
                Elevate Performance
              </Button>
            </Box>
          </Box>
        </Container>
      </HeroSection>

      <ContentSection>
        <Container size="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
                mx: "auto",
                mb: 4,
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.12)",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/u3papaX85MA"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Box>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="body2"
              color="secondary"
              weight="medium"
              sx={{
                mb: 2,
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              WAY MORE THAN A DASH CAM
            </Typography>

            <Typography
              variant="h1"
              color="primary"
              weight="medium"
              sx={{ mb: 4 }}
            >
              Invest in improved road <br /> safety for your drivers & <br />{" "}
              everyone else on <br /> the road.
            </Typography>

            <Typography
              variant="h4"
              color="text"
              sx={{
                maxWidth: "800px",
                mx: "auto",
                mb: 4,
              }}
            >
              Our mission? To transform road and fleet safety by using advanced
              vision technology and intuitive, automated coaching to improve and
              change driver behavior for the better. We strive to make the roads
              safer for all, and your company more profitable along the way.
            </Typography>

            <Button
              variant="primary"
              sx={{
                backgroundColor: theme.palette.primary.light,
                padding: "8px 18px",
                borderRadius: "50px",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: theme.palette.secondary.dark,
                },
              }}
            >
              Watch Video ▶
            </Button>
          </Box>
          <Divider sx={{ height: "2px", width: "60%", mx: "auto", mb: 8 }} />
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Box
              sx={{
                borderRadius: "24px",
                display: "grid",
                gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
                gap: { xs: 4, lg: 6 },
                alignItems: "center",
                maxWidth: "1200px",
                mx: "auto",
              }}
            >
              <Box>
                <Typography
                  variant="body2"
                  color="secondary"
                  weight="medium"
                  sx={{
                    mb: 2,
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    textAlign: "left",
                  }}
                >
                  PERFORMANCE BY THE NUMBERS
                </Typography>

                <Typography
                  variant="h3"
                  color="primary"
                  sx={{
                    mb: 4,
                    textAlign: "left",
                    fontSize: { xs: "1.75rem", md: "2.25rem" },
                    lineHeight: 1.2,
                  }}
                >
                  Unmatched data confidence drives unmatched fleet performance.
                </Typography>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 3,
                    mt: 4,
                  }}
                >
                  {stats.map((stat, index) => (
                    <Box key={index} sx={{ textAlign: "left" }}>
                      <Box
                        sx={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 2,
                        }}
                      >
                        <Typography sx={{ fontSize: "20px" }}>
                          <Image
                            src={stat.icon}
                            alt="logo"
                            height={50}
                            width={50}
                          />{" "}
                        </Typography>
                      </Box>
                      <Typography
                        variant="h2"
                        sx={{
                          fontWeight: 700,
                          mb: 0.5,
                          fontSize: { xs: "1.75rem", md: "2.25rem" },
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          opacity: 0.7,
                          fontWeight: 500,
                          fontSize: "0.875rem",
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box
                sx={{
                  position: "relative",
                  aspectRatio: { lg: "3 / 3", xs: "6 / 3" },
                  borderRadius: "16px",
                  overflow: "hidden",
                  order: { xs: -1, lg: 1 },
                }}
              >
                <Image
                  src="https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/6737ebd2667430263c3c3fc6_Netradyne_Home_Hero_Image_2.webp"
                  alt="Happy driver in safety vest showing fleet management success"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Box>
            </Box>
          </Box>

          <VideoSection>
            <Container size="lg">
              <Typography
                color="white"
                variant="h4"
                weight="bold"
                sx={{ mb: 4 }}
              >
                See it in action
              </Typography>

              <Box>
                <Box
                  sx={{
                    borderRadius: "16px",
                    height: "300px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: theme.palette.secondary.light,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Typography variant="h5" color="white">
                      ▶
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <Typography
                    variant="h5"
                    color="white"
                    weight="bold"
                    sx={{ mb: 2 }}
                  >
                    Sharp technology for sharper focus.
                  </Typography>
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{ opacity: 0.9, mb: 3 }}
                  >
                    Whether it&apos;s fatigue or everyday distractions like checking
                    a phone, our technology is designed to recognize signs of
                    inattention. When it detects a lapse in focus, it gently
                    prompts the driver with an audio alert—helping them stay
                    engaged and reducing the risk of accidents.
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="body2"
                      color="secondary"
                      weight="medium"
                      sx={{ mb: 1 }}
                    >
                      The scenario
                    </Typography>
                    <Typography
                      variant="body1"
                      color="white"
                      sx={{ opacity: 0.8 }}
                    >
                      This video demonstrates a driving situation called the
                      one-handed chatterbox.
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      variant="body2"
                      color="secondary"
                      weight="medium"
                      sx={{ mb: 1 }}
                    >
                      What happened next?
                    </Typography>
                    <Typography
                      variant="body1"
                      color="white"
                      sx={{ opacity: 0.8 }}
                    >
                      Driver&bull;i instantly detected distraction and gave an audio
                      alert, and the driver corrected his behavior.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Container>
          </VideoSection>
        </Container>
      </ContentSection>
    </>
  );
};

export default Hero;
