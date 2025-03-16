import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import theme from "../Theme";
import BuildIcon from "@mui/icons-material/Build";
import MoreIcon from "@mui/icons-material/MoreVert";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import DashboardIcon from "@mui/icons-material/Dashboard";

import { Button } from "@mui/material";

import logo from '../../assets/HomePage/Beer_Hopper_Banner.png'

import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import { isLoggedIn } from "../../models/api/Auth-Helpers";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleOpenLogin = (event: React.MouseEvent<HTMLElement>) => {
    handleMobileMenuClose();
    window.location.href = "/login"
  };
  
  const handleOpenRegistration = (event: React.MouseEvent<HTMLElement>) => {
    handleMobileMenuClose();
    window.location.href = "/register";
  }
  
  const handleOpenTools = (event: React.MouseEvent<HTMLElement>) => {
    handleMobileMenuClose();
    window.location.href = "/tools";
  }
  
  const handleNavigateHome = (event: React.MouseEvent<HTMLElement>) => {
    handleMobileMenuClose();
    window.location.href = "/";
  };
  
  const handleNavigateExplore = (event: React.MouseEvent<HTMLElement>) => {
    handleMobileMenuClose();
    window.location.href = "/explore";
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {!isLoggedIn && (
        <MenuItem onClick={handleOpenLogin}>
          <IconButton size="small" color="inherit">
            <Badge color="error">
              <LoginIcon sx={{ fontSize: 25 }} />
            </Badge>
          </IconButton>
          <p>Login</p>
        </MenuItem>
      )}
      {!isLoggedIn && (
        <MenuItem onClick={handleOpenRegistration}>
          <IconButton size="small" color="inherit">
            <Badge color="error">
              <AppRegistrationIcon sx={{ fontSize: 25 }} />
            </Badge>
          </IconButton>
          <p>Registration</p>
        </MenuItem>
      )}
      <MenuItem onClick={handleOpenTools}>
        <IconButton
          size="small"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <BuildIcon sx={{ fontSize: 25 }} />
        </IconButton>
        <p>Tools</p>
      </MenuItem>
      {isLoggedIn && (
        <MenuItem onClick={handleNavigateExplore}>
          <IconButton
            size="small"
            // aria-label="account of current user"
            // aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <DashboardIcon sx={{ fontSize: 25 }} />
          </IconButton>
          <p>Explore</p>
        </MenuItem>
      )}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, zIndex: 999, position: "sticky", top: 0 }}>
      <AppBar
        position="static"
        style={{
          background: theme.palette.primary.main,
        }}
      >
        <Toolbar>
          <Button
            onClick={handleNavigateHome}
            sx={{
              "&:hover": {
                backgroundColor: "inherit", // Prevent background color change on hover
                boxShadow: "none", // Remove shadow on hover
              },
            }}
          >
            <img
              src={logo}
              alt="BeerHopper Logo"
              style={{
                height: "2.25em",
              }}
            />
          </Button>
          <Search sx={{ flexGrow: 1 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {!isLoggedIn && (
              <IconButton
                size="large"
                // aria-label="show 4 new mails"
                color="inherit"
                onClick={handleOpenLogin}
              >
                <Badge color="error">
                  <LoginIcon />
                </Badge>
                <Typography
                  variant="caption"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "block", sm: "none" } }}
                >
                  Login
                </Typography>
              </IconButton>
            )}
            {!isLoggedIn && (
              <IconButton
                size="large"
                aria-label=""
                color="inherit"
                onClick={handleOpenRegistration}
              >
                <Badge color="error">
                  <AppRegistrationIcon />
                </Badge>
              </IconButton>
            )}
            <IconButton
              size="large"
              aria-label=""
              color="inherit"
              onClick={handleOpenTools}
            >
              <Badge color="error">
                <BuildIcon />
              </Badge>
            </IconButton>
            {isLoggedIn && (
              <IconButton
                size="large"
                aria-label=""
                color="inherit"
                onClick={handleNavigateExplore}
              >
                <Badge color="error">
                  <DashboardIcon />
                </Badge>
              </IconButton>
            )}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              // aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
