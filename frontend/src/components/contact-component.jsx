import React from "react";
import { useState } from "react";
import api from "../api/axios";
import Swal from 'sweetalert2';
import {
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import CirclePattern from "../assets/icons/patron-circulos.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)

    try {
      const result = await api.post("/contact", formData);

      console.log(result)

      if(result.status == 201) {
        Swal.fire({
          title: 'Message sent',
          text: 'We`ll get back to you soon',
          icon: 'success'
        })
      }
      else {
        Swal.fire({
          title: 'Oops',
          text: 'Something went wrong',
          icon: 'error'
        })
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      Swal.fire({
        title: 'Oops',
        text: 'Something went wrong',
        icon: 'error'
      })
    }
    finally {
      setFormData({
        email: "",
        name: "",
        message: "",
      })
    }
  };

  const contentStyle = {
    py: 8,
    px: 2,
    textAlign: "center",
    color: "white",
    backgroundImage: `url(${CirclePattern})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      zIndex: 1,
    },
    "& > *": {
      position: "relative",
      zIndex: 2,
    },
  };

  const socialMediaStyle = {
    marginTop: "24px",
  };

  const socialMediaItemStyle = {
    mr: "32px",
    width: '40px',
    height: '40px'
  };

  const fieldStyle = {
    mb: 2, 
    bgcolor: "#fcfcf9", 
    input: { color: "#1e1e1e" },
    borderRadius: '10px'
  };

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
    <Box sx={contentStyle}>
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        Contact Us
      </Typography>
      <Box component="form" maxWidth="600px" mx="auto" mt={4} onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          variant="filled"
          sx={fieldStyle}
          onChange={handleChange}
          name="name"
          required
          value={formData.name}
        />
        <TextField
          fullWidth
          label="Email"
          variant="filled"
          sx={fieldStyle}
          name="email"
          onChange={handleChange}
          required
          value={formData.email}
        />
        <TextField
          fullWidth
          label="Message"
          variant="filled"
          multiline
          rows={4}
          sx={fieldStyle}
          name="message"
          onChange={handleChange}
          required
          value={formData.message}
        />

        <Button type="submit" variant="contained" sx={buttonStyle}>
          Submit
          <ArrowForwardIcon />
        </Button>
      </Box>

      <Box sx={socialMediaStyle}>
        <InstagramIcon sx={socialMediaItemStyle} />
        <TwitterIcon sx={socialMediaItemStyle} />
        <FacebookIcon sx={socialMediaItemStyle} />
      </Box>
    </Box>
  );
};

export default ContactComponent;
