import React, { FC } from "react";
import {
  NavbarLogo,
  NavbarWrapper,
  CustomAppBar,
  AccountSettingsWrapper,
  ButtonGroupWrapper,
  NavbarLogoDesktop,
  AccordionSummaryContentWrapper,
  AccordionDetailsContentWrapper,
  CustomMenuItem,
} from "./Navbar.styled";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Logo } from "../../assets/svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import BurgerButton from "./BurgerButton";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ButtonOrange, DefaultButton } from "../Buttons";

const pages = [
  "Мої курси >>",
  "Профіль >>",
  "Налаштування >>",
  "Історія замовлень >>",
  "Вийти >>",
];

const Navbar: FC = () => {
  const [openNav, setOpenNav] = React.useState<boolean>(false);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <NavbarWrapper>
      <CustomAppBar>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            position: "absolute",
            width: "100%",
            minHeight: "70px",
            left: 0,
            top: 0,
          }}
        >
          <Accordion
            sx={{ width: "100%" }}
            onChange={() => setOpenNav(!openNav)}
            expanded={openNav}
          >
            <AccordionSummary aria-controls="panel1-content" id="panel1-header">
              <BurgerButton isActive={openNav} />
              <AccordionSummaryContentWrapper>
                <NavbarLogo src={Logo} />
              </AccordionSummaryContentWrapper>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: "0 16px" }}>
              <AccordionDetailsContentWrapper>
                {pages.map((page) => (
                  <CustomMenuItem
                    key={page}
                    onClick={() => setOpenNav(!openNav)}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </CustomMenuItem>
                ))}
              </AccordionDetailsContentWrapper>
            </AccordionDetails>
          </Accordion>
        </Box>
        <NavbarLogoDesktop src={Logo} />
        <ButtonGroupWrapper>
          <a href="#">Допомога</a>
          <ButtonOrange onClick={handleOpenUserMenu}>
            <AccountSettingsWrapper>
              <Avatar alt="Avatar" src="/static/images/avatar/2.jpg" />
            </AccountSettingsWrapper>
            <span style={{ marginRight: "10px" }}>Юзер</span>
            <FontAwesomeIcon icon={faCaretDown} />
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
          <DefaultButton>Всі курси</DefaultButton>
        </ButtonGroupWrapper>
      </CustomAppBar>
    </NavbarWrapper>
  );
};

export default Navbar;
