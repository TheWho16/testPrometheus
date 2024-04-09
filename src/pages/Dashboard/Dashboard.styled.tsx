import styled from "styled-components";

export const DashboardWrapper = styled.div`
  position: relative;
  padding-top: 70px;
  padding: 70px 20% 0;
  width: 100%;
  height: calc(100vh - 70px);
  background: #fbfbfb;
  margin-top: 20px;
  @media (max-width: 740px) {
    padding: 70px 10px 0;
  }
`;
export const DashboardContent = styled.div`
  display: flex;
  @media (max-width: 740px) {
    flex-direction: column-reverse;
  }
`;

export const DashboardHeader = styled.h2`
  font-size: 18px;
  line-height: 26.64px;
  text-transform: uppercase;
  color: #000;
  display: none;
  @media (max-width: 740px) {
    display: block;
  }
`;

export const DashboardHeaderDesktop = styled(DashboardHeader)`
  display: block;
  @media (max-width: 740px) {
    display: none;
  }
`;
