import { AppBar, Button } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import styled from "styled-components";
import { ButtonTypeMap } from "@mui/material";

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

export const CustomAppBar = styled.div`
  background: #fff;
  height: 40px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 100px 15px;

  @media (max-width: 740px) {
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
  @media (max-width: 740px) {
    display: none;
  }
`;
export const AccountSettingsWrapper = styled.div`
  @media (max-width: 740px) {
    display: none;
  }
`;

export const DefaultButton = styled(Button)`
  border: none;
  outline: none;
  text-transform: none !important;
  border-radius: 8px !important;
  max-height: 46px !important;
  font: 600 14px/40px Open Sans !important;
  transition: background-color 0.2s ease !important;
  background: #244b83 !important;
  color: #fff !important;
  &:hover {
    cursor: pointer;
  }

  @media (hover: hover) {
    &:hover {
      background: #f58932 !important;
    }
  }

  @media (hover: none) {
    &:active {
      background: #f58932 !important;
    }
  }
` as OverridableComponent<ButtonTypeMap>;

export const ButtonOrange = styled(DefaultButton)`
  background: #f58932 !important;
  gap: 5px;
  font: 400 16px/40px Open Sans !important;
`;
