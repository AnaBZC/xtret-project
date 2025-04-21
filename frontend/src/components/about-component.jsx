import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import VisibilityIcon from '@mui/icons-material/Visibility';

const AboutComponent = () => {

  const textCardStyle = {
    color: '#ffff',
    mb: '16px'
  }


  return (
    <Box
      sx={{
        bgcolor: "#121212",
        color: "white",
        py: 8,
        px: 8,
        textAlign: "center",
      }}
    >
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        About Us
      </Typography>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Card sx={{ minWidth: 275, backgroundColor: "#121212" }}>
            <CardContent>
              <RocketLaunchIcon sx={{ color: "#04F7E6", width: "100px", height: "100px" }} />
              <Typography sx={textCardStyle}>
                Our Mission
              </Typography>
              <Typography sx={textCardStyle}>
                We strive to offer clothes that reflect the active,
                free, and urban lifestyle of our customers. Our
                mission is to inspire confidence, style, and
                authenticity every step of the way, providing a
                unique and satisfying shopping experience that
                fosters emotional connection and loyalty from
                our customers.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={6}>
          <Card sx={{ minWidth: 275, backgroundColor: "#121212" }}>
            <CardContent>
              <VisibilityIcon sx={{ color: "#04F7E6", width: "100px", height: "100px" }} />
              <Typography sx={textCardStyle}>
                Our Vision
              </Typography>
              <Typography sx={textCardStyle}>
                We aim to become the top choice for urban
                fashion among upper-middle-class adults in CR,
                recognized for our innovation, style, and
                commitment to quality. We aspire to inspire our
                customers to live authentically and
                passionately embrace their culture in every
                aspect of their lives.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutComponent;
