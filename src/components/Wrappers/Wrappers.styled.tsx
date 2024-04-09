import { Grid } from "@mui/material";
import styled from "styled-components";

export const BaseGrid = styled(Grid)`
  position: relative;
  box-sizing: border-box;
`;

export const FlexRow = styled.div<{
  $justifyContent?: string;
  $width?: string;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  width: ${({ $width }) => $width || "100%"};
  justify-content: ${({ $justifyContent }) =>
    $justifyContent || "space-between"};
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
