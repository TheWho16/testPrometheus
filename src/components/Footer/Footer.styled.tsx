import styled from "styled-components";
import { Breakpoints } from "../../enums/Breakpoints";

export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
  max-width: 1300px;
  padding: 64px 100px;
  background: #fff;
  color: #18191f;
  font-size: 14px;
  line-height: 24px;
  padding-top: 64px;
  z-index: 100;
  position: relative;

  @media (max-width: ${Breakpoints.LG}px) {
    padding: 70px 7vh 0;
    max-width: 900px;
  }
  @media (max-width: ${Breakpoints.ML}px) {
    padding: 70px 15px 0;
    max-width: 800px;
  }
  @media (max-width: ${Breakpoints.MD}px) {
    padding: 70px 10px 0;
    flex-wrap: wrap;
    max-width: -webkit-fill-available !important;
    max-width: fill-available !important;
  }
  @media (max-width: ${Breakpoints.SM}px) {
    max-width: 500px;
  }
  @media (max-width: ${Breakpoints.XM}px) {
    max-width: -webkit-fill-available;
  }
`;

export const FooterContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-direction: row;

  @media (max-width: ${Breakpoints.MD}px) {
    flex-wrap: wrap;
    max-width: -webkit-fill-available !important;
    max-width: fill-available !important;
  }
`;

export const FooterAside = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  margin: 0 auto;

  @media (max-width: ${Breakpoints.MD}px) {
    max-width: -webkit-fill-available !important;
    max-width: fill-available !important;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 30px;
  }
`;

export const FooterAsideBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  gap: 10px;
`;

export const FooterAsideBlockMob = styled(FooterAsideBlock)`
  gap: 50px;
  @media (max-width: ${Breakpoints.MD}px) {
    gap: 10px;
    flex-direction: column-reverse;
    align-items: flex-start;
    flex-basis: 100%;
  }
`;

export const FooterBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  color: #18191f;
`;
export const FooterBlockWrapperMob = styled(FooterBlockWrapper)`
  flex-grow: 2;
  @media (max-width: ${Breakpoints.MD}px) {
    order: 3;
  }
`;

export const FooterTitle = styled.h3`
  font-weight: normal;
  font-size: 18px;
  line-height: 31px;
  margin-bottom: 12px;
`;

export const FooterLink = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
  list-style-type: none;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      color: #f58932;
    }
  }

  @media (hover: none) {
    &:active {
      color: #f58932;
    }
  }
`;

export const FooterImg = styled.img`
  display: block;
  width: 134px;
  transition: all 0.1s linear 0s;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const FooterLinkSmall = styled(FooterLink)`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;

export const FooterImgSmall = styled.img`
  width: 41px;
  height: auto;
`;
