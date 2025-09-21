"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Menu,
  MenuItem,
  useTheme,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LanguageIcon from "@mui/icons-material/Language";
import { styled } from "@mui/material/styles";
import { Button, Typography, Container, IconButton } from "@/components/ui";
import Image from "next/image";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  boxShadow: "none",
  color: theme.palette.text.secondary,
  position: "fixed",
  top: "16px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "90%",
  maxWidth: "1200px",
  zIndex: theme.zIndex.appBar,
  borderRadius: "50px",
  [theme.breakpoints.up("md")]: {
    top: "24px",
  },
}));

const NavItem = styled(Box)(({}) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  padding: "4px 8px",
  borderRadius: "8px",
  transition: "background-color 0.2s ease",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}));

const NavMenu = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "24px",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

const MobileMenu = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("lg")]: {
    display: "flex",
  },
}));

const Header: React.FC = () => {
  const theme = useTheme();
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(
    null
  );

  const navigationItems = [
    { label: "Solutions", hasDropdown: true },
    { label: "Industries", hasDropdown: true },
    { label: "Resources", hasDropdown: true },
    { label: "Company", hasDropdown: true },
  ];

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  return (
    <StyledAppBar position="fixed">
      <Container size="full" padding="none">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            minHeight: "50px !important",
            padding: { xs: "0 16px", lg: "0 32px" },
          }}
        >
          <Image
            width={100}
            height={100}
            src="https://cdn.prod.website-files.com/661587090828dbbd6ac283cc/66df48efe6d495ab10d44241_Netradyne_Full-Logo_White-Green.svg"
            alt="logo"
            style={{ maxWidth: "100%" }}
          />

          <NavMenu>
            {navigationItems.map((item) => (
              <NavItem key={item.label}>
                <Typography
                  variant="body1"
                  color="white"
                  weight="medium"
                  sx={{ fontSize: "15px" }}
                >
                  {item.label}
                </Typography>
              </NavItem>
            ))}
          </NavMenu>

          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <IconButton
              sx={{
                color: "white",
                borderRadius: "8px",
                width: "40px",
                height: "40px",
              }}
            >
              <LanguageIcon sx={{ fontSize: "20px" }} />
            </IconButton>

            <Divider
              orientation="vertical"
              flexItem
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                height: "24px",
                alignSelf: "center",
              }}
            />

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.dark,
                fontWeight: 500,
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Sign In
            </Typography>

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
              Book Demo
            </Button>
          </Box>

          <MobileMenu>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleMobileMenuOpen}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
          </MobileMenu>

          <Menu
            anchorEl={mobileMenuAnchor}
            open={Boolean(mobileMenuAnchor)}
            onClose={handleMobileMenuClose}
            sx={{
              display: { lg: "none" },
              "& .MuiPaper-root": {
                backgroundColor: theme.palette.background.light,
                borderRadius: "12px",
                width: "100%",
                mt: 1,
              },
            }}
          >
            {navigationItems.map((item) => (
              <MenuItem
                key={item.label}
                onClick={handleMobileMenuClose}
                sx={{ dispaly: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="body1" weight="medium">
                  {item.label}
                </Typography>
                {item.hasDropdown && (
                  <KeyboardArrowDownIcon
                    sx={{
                      ml: 0.5,
                      fontSize: "18px",
                      color: theme.palette.primary.light,
                    }}
                  />
                )}
              </MenuItem>
            ))}
            <MenuItem onClick={handleMobileMenuClose}>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.dark,
                  fontWeight: 500,
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Sign In
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleMobileMenuClose}>
              <Button
                variant="primary"
                size="medium"
                sx={{
                  backgroundColor: "transparent",
                  color: theme.palette.text.primary,
                  border: `1px solid ${theme.palette.text.dark}`,
                  fontWeight: 600,
                  borderRadius: "50px",
                  fontSize: "14px",
                  padding: "5px 12px",
                  textTransform: "none",
                }}
              >
                Book Demo
              </Button>
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
