import { Grid } from "@mui/material";
import styled from "styled-components";
import { FlexColumn } from "../../components/Wrappers/Wrappers.styled";
import { Breakpoints } from "../../enums/Breakpoints";

export const DashboardWrapper = styled(Grid)`
  position: relative;
  padding-top: 70px;
  padding: 70px 10vh 0;
  width: 100% !important;
  background: #fbfbfb !important;
  margin-top: 20px;
  @media (max-width: ${Breakpoints.MD}px) {
    padding: 70px 10px 0;
  }
  @media (max-width: ${Breakpoints.LG}px) {
    padding: 70px 7vh 0;
  }
  @media (max-width: ${Breakpoints.ML}px) {
    padding: 70px 15px 0;
  }
`;

export const DashboardContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  @media (max-width: ${Breakpoints.MD}px) {
    flex-direction: column-reverse;
  }
`;

export const DashboardContent = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: ${Breakpoints.MD}px) {
    flex-direction: column-reverse;
  }
`;

export const SearchContentSubText = styled.div`
  color: #999;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-size: 1rem;
  line-height: 1em;
  width: 100%;
  padding-left: 8px;
  box-sizing: border-box;
`;
export const DashboardHeader = styled.h2`
  font-size: 18px;
  line-height: 26.64px;
  text-transform: uppercase;
  color: #000;
  display: none;
  @media (max-width: ${Breakpoints.MD}px) {
    display: block;
  }
`;
export const SearchHeader = styled.h2`
  font-size: 18px;
  line-height: 26.64px;
  text-transform: uppercase;
  color: #000;
  box-sizing: border-box;
  width: 100%;
  padding-left: 8px;
`;
export const DashboardHeaderDesktop = styled(DashboardHeader)`
  display: block;
  @media (max-width: ${Breakpoints.MD}px) {
    display: none;
  }
`;
export const SearchInputWrapper = styled(FlexColumn)`
  flex-grow: 1;
  gap: 10px;
  max-width: 310px;
  @media (max-width: ${Breakpoints.MD}px) {
    max-width: 100%;
  }
`;
