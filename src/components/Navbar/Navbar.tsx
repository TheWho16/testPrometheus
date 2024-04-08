import React, { FC } from "react";
import {
  NavbarLogo,
  NavbarWrapper,
  CustomAppBar,
  AccountSettingsWrapper,
  DefaultButton,
  ButtonOrange,
  ButtonGroupWrapper,
  UserArrow,
} from "./Navbar.styled";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Logo } from "../../assets/svg";

const pages = [
  "Мої курси",
  "Профіль",
  "Налаштування",
  "Історія замовлень",
  "Вийти",
];
const settings = ["Істр", "Account", "Dashboard", "Logout"];

const Navbar: FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <NavbarWrapper>
      <CustomAppBar>
        {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            position: "absolute",
            left: 0,
            top: 0,
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="primary"
          >
            |||
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
        <NavbarLogo src={Logo} />
        <ButtonGroupWrapper>
          <a href="#">Допомога</a>
          <ButtonOrange onClick={handleOpenUserMenu}>
            <AccountSettingsWrapper>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            </AccountSettingsWrapper>
            Юзер
            <UserArrow />
            <i className="fa fa-caret-down" aria-hidden="true"></i>
          </ButtonOrange>
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
            {pages.map((pages) => (
              <MenuItem key={pages} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{pages}</Typography>
              </MenuItem>
            ))}
          </Menu>
          <DefaultButton onClick={handleCloseNavMenu}>Всі курси</DefaultButton>
        </ButtonGroupWrapper>
      </CustomAppBar>
    </NavbarWrapper>
  );
};

export default Navbar;
