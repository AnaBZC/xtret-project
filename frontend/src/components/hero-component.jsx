import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HeroBackground from "../assets/images/hero-background.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HeroComponent = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${HeroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Explore our collections now and be part of the movement
      </Typography>
      <Button variant="contained" sx={{ mt: 3, bgcolor: "#FF560A" }}>
        Shop now
        <ArrowForwardIcon />
      </Button>
    </Box>
  );
};

export default HeroComponent;
