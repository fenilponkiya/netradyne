"use client";
import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Button, Typography, Container } from "@/components/ui";
import theme from "@/theme";

const BlogSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  position: "relative",
}));

const Blog: React.FC = () => {
  return (
    <BlogSection>
      <Container size="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "",
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Explore the blog
          </Typography>

          <Button
            variant="primary"
            sx={{
              backgroundColor: theme.palette.primary.light,
              padding: "6px 16px",
              borderRadius: "50px",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: theme.palette.secondary.dark,
              },
            }}
          >
            View All
          </Button>
        </Box>
      </Container>
    </BlogSection>
  );
};

export default Blog;
