import styled from "styled-components";
import { MenuItem } from "@mui/material";

import { Breakpoints } from "../../enums/Breakpoints";

export const NavbarWrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 100;
`;

export const NavbarLogo = styled.img`
  display: block;
  width: auto;
  height: 34px;
`;
export const NavbarLogoDesktop = styled.img`
  display: block;
  width: auto;
  height: 34px;
  @media (max-width: ${Breakpoints.MD}px) {
    display: none;
  }
`;

export const CustomAppBar = styled.div`
  background: #fff;
  height: 40px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 100px 15px;

  @media (max-width: ${Breakpoints.MD}px) {
    padding: 15px;
    justify-content: center;
  }
`;

export const ButtonGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  @media (max-width: ${Breakpoints.MD}px) {
    display: none;
  }
`;
export const AccountSettingsWrapper = styled.div`
  @media (max-width: ${Breakpoints.MD}px) {
    display: none;
  }
`;

export const BurgerWrapper = styled.div<{ $isActive: boolean }>`
  position: absolute;
  left: 0;
  .hamburger {
    margin: 0;
    margin-left: 15px;
    padding: 0;
    float: left;
    transition: opacity 0.3s;
  }

  .hamburger:hover {
    cursor: pointer;
  }

  .hamburger .line {
    width: 30px;
    height: 5px;
    background-color: #244b83;
    margin: 5px auto;
    transition: all 0.3s ease-in-out;
    border-radius: 5px;
  }

  ${({ $isActive }) =>
    $isActive &&
    `
.hamburger .line:nth-child(2) {
  opacity: 0 !important;
}

.hamburger .line:nth-child(1) {
  transform: translateY(10px) rotate(45deg) !important;
}

.hamburger .line:nth-child(3) {
  transform: translateY(-10px) rotate(-45deg) !important;
}
`}
`;

export const AccordionSummaryWrapper = styled.div`
  width: 100%;
  max-with: 100%;
`;

export const AccordionSummaryContentWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6px 0px;
`;
export const AccordionDetailsContentWrapper = styled.div`
  width: 100%;
  border-top: 1px solid #244b83;
`;

export const CustomMenuItem = styled(MenuItem)`
  font-size: 16px !important;
  font-weight: 600 !important;
  text-decoration: none !important;
  outline: none;
  background-color: #fbfbfb !important;
  width: 100%;
  padding: 12px 20px !important;
  border-bottom: 1px solid #e7e7e7 !important;
  color: #9e9e9e !important;

  &:hover {
    cursor: pointer;
  }

  @media (hover: hover) {
    &:hover {
      background-color: #767676 !important;
    }
  }

  @media (hover: none) {
    &:active {
      background-color: #767676 !important;
    }
  }
`;

export const MobMenuText = styled.div`
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  outline: none;
  display: block;
  width: 100%;
  cursor: pointer;
`;
