import styled from "styled-components";
import { AccordionSummary, AppBar, Button, MenuItem } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

import { ButtonTypeMap } from "@mui/material";

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

export const ButtonOutline = styled(DefaultButton)`
  border-radius: 8px !important;
  background: none !important;
  padding: 12px 16px !important;
  border: 1px solid #244b83 !important;
  font-weight: 600 !important;
  font-size: 14px !important;
  line-height: 20px !important;
  color: #244b83 !important;
  height: 100% !important;
  max-height: 100% !important;
  &:hover {
    cursor: pointer;
  }

  @media (hover: hover) {
    &:hover {
      background: none !important;
      border-color: #f58932 !important;
      color: #f58932 !important;
    }
  }

  @media (hover: none) {
    &:active {
      background: none !important;
      border-color: #f58932 !important;
      color: #f58932 !important;
    }
  }
`;
