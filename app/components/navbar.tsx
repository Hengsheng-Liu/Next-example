// ResponsiveNavbar.js
"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
  Button
} from "@mui/material";
import Link from "next/link";
import { Instagram, Menu }from "@mui/icons-material";
const ResponsiveNavbar = () => {
  const theme = useTheme();
  const links: string[] = ["Home", "Service", "About", "Contact"];
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const NavLinks = () => {
    return (
      <List sx={!drawerOpen?{ display: "flex", marginLeft:"auto", marginRight:"auto"}:null}>
        {links.map((link) => (
            <ListItem key={link} sx={{justifyContent:"center"}}>
                <Link href={`/${link.toLowerCase()}`}>
                    {link}
                </Link>
            </ListItem>
        ))}
      </List>
    );
  };
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const appBarContent = (
    <Toolbar >
      <Typography variant="h6">
        Your App Name
      </Typography>
      {isSmallScreen ? (
        <>
          <IconButton color="inherit" onClick={toggleDrawer} sx={{ marginLeft: "auto" }}>
            <Menu />
          </IconButton>
        </>
      ) : (
        <>
        <NavLinks />
        <Button sx = {{backgroundColor: "green!important", color: "white"}}>
            Reserve Now 
        </Button>
        </>
      )}

    </Toolbar>
  );

  return (
    <>
      <AppBar position="static" color = "transparent" sx={{boxShadow: 'none' }}>{appBarContent}</AppBar>
      {isSmallScreen && (
        <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer}>
          <NavLinks></NavLinks>
        </Drawer>
      )}
    </>
  );
};

export default ResponsiveNavbar;
