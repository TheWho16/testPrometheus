import { IconButton, OutlinedInput } from "@mui/material";
import styled from "styled-components";
import { IconButtonTypeMap, OutlinedInputProps } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Breakpoints } from "../../enums/Breakpoints";

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const CustomIconButton = styled(IconButton)`
  border: none;
  outline: none;
  text-transform: none !important;
  max-height: 46px !important;
  font: 600 14px/40px Open Sans !important;
  transition: background-color 0.2s ease !important;
  background: #244b83 !important;
  color: #fff !important;
  border-top-right-radius: 6px !important;
  border-bottom-right-radius: 6px !important;
  height: 100% !important;
  min-height: 100% !important;
  max-height: 100% !important;
  margin: -2px 0 -2px 0px !important;
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  width: 45px !important;

  @media (max-width: ${Breakpoints.MD}px) {
    height: 50px !important;
  }
  &:hover {
    cursor: pointer;
  }
  path {
    fill: #fff !important;
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
` as OverridableComponent<IconButtonTypeMap>;

export const CustomOutlinedInput = styled(OutlinedInput)`
  width: 300px !important;
  @media (max-width: ${Breakpoints.MD}px) {
    width: 98% !important;
  }
`;

export const CustomLabel = styled.label`
  font-weight: normal;
  font-size: 14px;
  line-height: 170%;
  color: #000;
  display: block;
  margin-left: 8px;
`;
