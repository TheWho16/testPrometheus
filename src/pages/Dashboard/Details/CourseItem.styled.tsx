import styled from "styled-components";

export const CourseItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #cccdcd;
  background: #fff;
  border-radius: 8px;
  width: 100%;
`;

export const CourseItemImgWrapper = styled.div`
  flex-grow: 1;
`;

export const CourseItemImg = styled.img`
  width: 250px;
  height: auto;
  overflow: hidden;
  border-radius: 8px 0 0 8px;
  @media (max-width: 899px) {
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
  min-height: 48px;
  margin-bottom: 12px;
`;
export const CourseItemDescription = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #18191f;
  display: block;
`;
