import styled from "styled-components";
import { Breakpoints } from "../../../enums/Breakpoints";

export const CourseItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #cccdcd;
  background: #fff;
  border-radius: 8px;
  width: 100%;
  @media (max-width: ${Breakpoints.MD}px) {
    flex-direction: column;
  }
`;

export const CourseItemImgWrapper = styled.div``;

export const CourseItemImg = styled.img`
  width: 250px;
  height: auto;
  overflow: hidden;
  border-radius: 8px 0 0 8px;
  @media (max-width: ${Breakpoints.MD}px) {
    width: 100%;
  }
`;

export const CourseItemContentWrapper = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  padding: 16px 15px 17px;
`;

export const CourseItemTitle = styled.h3`
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #18191f;
  width: 272px;

  margin-bottom: 12px;
`;
export const CourseItemDescription = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #18191f;
  display: block;
`;

export const CourseItemButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const SearchCourseItemWrapper = styled.div`
  position: relative;
  border-bottom: 1px solid #e6e6e6;
  padding: 20px 10px;
  list-style-type: none;
  box-sizing: border-box;
  cursor: pointer;
  @media (hover: hover) {
    &:hover {
      background: #f9f9f9;
    }
  }

  @media (hover: none) {
    &:active {
      background: #f9f9f9;
    }
  }
`;

export const SearchCourseItemTitle = styled.div`
  font-size: 14px;
  color: #999;
`;

export const SearchCourseItemLink = styled.a`
  color: #18191f;
  float: right;
  padding-left: 5px;
  line-height: 1.6em;
  font-size: 16px;
  @media (hover: hover) {
    &:hover {
      color: rgb(245, 137, 50);
    }
  }

  @media (hover: none) {
    &:active {
      color: rgb(245, 137, 50);
    }
  }
`;
