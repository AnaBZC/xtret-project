import * as React from 'react';
import { Link } from 'react-scroll';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';





// Importa el logo de assets para el navbar
import logoMagenta from '../assets/icons/logo-magenta.svg';


const pages = [{ description: 'About Us', link: 'about-section' }, { description: 'Our Products', link: 'product-section' }, { description: 'Contact', link: 'contact-section' }];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const styleTest = {
    backgroundColor: 'black',
  }

  const logoStyle = {
    maxWidth: '150px',
    height: '100px',
    objectFit: 'contain',
  };

  const menuTextStyle = {
    justifyContent: 'flex-end',
  };

  const dividerStyle = {
    with: "100%",
    height: '1px',
    backgroundColor: "#F70CF0"
  }

  const buttonLinkStyle = {
    my: 2, 
    color: 'white', 
    display: 'block',
    '&:hover': {
      bgcolor: '#400e78',
      transform: 'scale(1.05)',
      boxShadow: '0 4px 20px rgba(64, 14, 120, 0.5)',
    },
    transition: 'all 0.3s ease',
  }

  return (
    <AppBar position="static" sx={styleTest}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logoMagenta} alt="Producto" style={logoStyle} />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.description} onClick={handleCloseNavMenu} sx={menuTextStyle}>
                  <Typography sx={{ textAlign: 'center' }}>{page.description}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={[{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }, menuTextStyle]}>
            {pages.map((page) => (
              <Link 
                to={page.link}
                smooth={true}
                duration={500}
                offset={-50} 
              >
                <Button
                  key={page.link}
                  onClick={handleCloseNavMenu}
                  sx={buttonLinkStyle}
                >
                  {page.description}
                </Button>
              </Link>

            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {pages.map((setting) => (
                <MenuItem key={setting.description} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting.description}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <div style={dividerStyle}>
      </div>
    </AppBar>
  );
}
export default ResponsiveAppBar;
