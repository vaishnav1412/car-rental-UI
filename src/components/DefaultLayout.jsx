import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Tooltip from "@mui/material/Tooltip";
import logo from "../components/assests/logo.png";
import { useSelector } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";

const pages = ["Home", "Cars", "Deals"];
const settings = ["Registration", "Login", "Logout"];

function ResponsiveAppBar({ userName }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElCar, setAnchorElCar] = React.useState(null);

  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenCarMenu = (event) => {
    setAnchorElCar(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseCarMenu = (type) => {
    console.log(type);
    navigate(`/${type.toLowerCase()}`);
    setAnchorElCar(null);
  };

  const logout = () => {
    localStorage.removeItem("persist:root");
    navigate("/");
    window.location.reload();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "orange",
              textDecoration: "none",
            }}
          >
            <div className="logo-container">
              <img
                src={logo}
                alt="logoimage"
                width="150"
                height="100"
                className="logo"
              />
            </div>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ mx: 2, color: "black" }}
              >
                {page === "Cars" ? (
                  <>
                    <Link
                      to="/cars"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Cars
                    </Link>
                    <IconButton
                      size="small"
                      edge="end"
                      aria-label="dropdown"
                      aria-haspopup="true"
                      onClick={handleOpenCarMenu}
                      color="inherit"
                      sx={{ marginLeft: 2 }}
                    >
                      <ArrowDropDownIcon />
                    </IconButton>
                    <Menu
                      anchorEl={anchorElCar}
                      open={Boolean(anchorElCar)}
                      onClose={() => handleCloseCarMenu()}
                      sx={{ marginTop: "30px" }}
                    >
                      {["Sedan", "Muv", "Suv", "Luxury", "Electric"].map(
                        (type) => (
                          <MenuItem
                            key={type}
                            onClick={() => handleCloseCarMenu(type)}
                          >
                            {type}
                          </MenuItem>
                        )
                      )}
                    </Menu>
                  </>
                ) : page === "Home" ? (
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {page}
                  </Link>
                ) : page === "Deals" ? (
                  <Link
                    to="/deals"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {page}
                  </Link>
                ) : (
                  page
                )}
              </Button>
            ))}
          </Box>
        </Toolbar>

        <Box sx={{ flexGrow: 0, marginLeft: 2, marginTop: "2px" }}>
          <Tooltip title={`Hello ${currentUser?.rest?.name}`}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 3 }}>
              <PersonIcon style={{ fontSize: "2rem" }} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                {setting === "Registration" ? (
                  <Button
                    sx={{ width: "100%" }}
                    onClick={() => navigate("/register")}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </Button>
                ) : setting === "Login" ? (
                  <Button
                    sx={{ width: "100%" }}
                    onClick={() => navigate("/login")}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </Button>
                ) : (
                  <Button
                    sx={{ width: "100%" }}
                    onClick={setting === "Logout" ? logout : null}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </Button>
                )}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
    </AppBar>
  );
}

export default ResponsiveAppBar;
