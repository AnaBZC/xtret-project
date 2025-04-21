import React from "react";
import { Box, Typography, Button, TextField, Grid, Card, CardMedia, CardContent } from "@mui/material";

import HeroBackground from "../assets/images/hero-background.png";
import imagenSudadera from '../assets/images/sudadera.png';
import imagenGorra from '../assets/images/gorra.png';
import imagenSueter from '../assets/images/sueter.png';


const ProductComponent = () => {
  const products = [
    { name: 'Hoddie', image: imagenSueter },
    { name: 'Cap', image: imagenGorra },
    { name: 'Sweatshirt', image: imagenSudadera },
  ];

  return (
    <Box sx={{
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
      <Typography variant="h2" fontWeight="bold" align="center" gutterBottom>
        Our collection
      </Typography>
      <Grid container spacing={6} justifyContent="center">
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card sx={{ bgcolor: '#1e1e1e', color: 'white', width: '500px' }}>
              <CardMedia component="img" height="350" image={product.image} alt={product.name} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {product.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductComponent;