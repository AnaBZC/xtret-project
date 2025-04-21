import React from "react";
import { useState } from "react";
import api from "../api/axios";
import Swal from 'sweetalert2';
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import CirclePattern from "../assets/icons/patron-circulos.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

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
    mr: "24px",
  };

  return (
    <Box sx={contentStyle}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Contact us
      </Typography>
      <Typography gutterBottom>
        Estamos aquí para resolver tus dudas o ayudarte con tu pedido.
      </Typography>
      <Box component="form" maxWidth="600px" mx="auto" mt={4} onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Nombre"
          variant="filled"
          sx={{ mb: 2, bgcolor: "#1e1e1e", input: { color: "white" } }}
          onChange={handleChange}
          name="name"
          required
          value={formData.name}
        />
        <TextField
          fullWidth
          label="Correo electrónico"
          variant="filled"
          sx={{ mb: 2, bgcolor: "#1e1e1e", input: { color: "white" } }}
          name="email"
          onChange={handleChange}
          required
          value={formData.email}
        />
        <TextField
          fullWidth
          label="Mensaje"
          variant="filled"
          multiline
          rows={4}
          sx={{ mb: 2, bgcolor: "#1e1e1e", input: { color: "white" } }}
          name="message"
          onChange={handleChange}
          required
          value={formData.message}
        />

        <Button type="submit" variant="contained" sx={{ bgcolor: "#FF560A" }}>
          Enviar
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
