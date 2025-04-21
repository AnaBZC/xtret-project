import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Fade } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import imageHero1 from '../assets/images/hero-image-1.jpeg';
import imageHero2 from '../assets/images/hero-image-2.jpeg';
import imageHero3 from '../assets/images/hero-image-3.jpeg';

const slides = [
  {
    title: 'Explore our collections now',
    subtitle: 'and be part of the movement ',
    image: imageHero1,
  },
  {
    title: 'Explore our collections now',
    subtitle: 'and be part of the movement ',
    image: imageHero2,
  },
  {
    title: 'Explore our collections now',
    subtitle: 'and be part of the movement ',
    image: imageHero3,
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const buttonStyle = {
    mt: 3, 
    bgcolor: "#FF560A",
    '&:hover': {
      textDecoration: 'underline',
      transform: 'scale(1.05)',
    },
    transition: 'all 0.3s ease',
  }

  return (
    <Box sx={{ position: 'relative', height: '90vh', overflow: 'hidden' }}>
      {slides.map((slide, index) => (
        <Fade in={index === activeIndex} timeout={1000} key={index}>
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: index === activeIndex ? 'flex' : 'none',
              alignItems: 'center',
              justifyContent: 'left',
              textAlign: 'left',
              color: 'white',
              px: 2,
              transition: 'opacity 1s ease-in-out',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                zIndex: 1,
              },
              '& > *': {
                position: 'relative',
                zIndex: 2,
              },
            }}
          >
            <Box>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                {slide.title}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {slide.subtitle}
              </Typography>
              <Button variant="contained" sx={buttonStyle}>
                Shop Now
                <ArrowForwardIcon />
              </Button>
            </Box>
          </Box>
        </Fade>
      ))}
    </Box>
  );
}
