import React, { FC, useState } from "react";
import { CourseImg1 } from "../../../assets/img";
import {
  CourseItemWrapper,
  CourseItemImgWrapper,
  CourseItemImg,
  CourseItemContentWrapper,
  CourseItemTitle,
  CourseItemDescription,
} from "./CourseItem.styled";

const CourseItem: FC = () => {
  return (
    <CourseItemWrapper>
      <CourseItemImgWrapper>
        <CourseItemImg src={CourseImg1} />
      </CourseItemImgWrapper>
      <CourseItemContentWrapper>
        <CourseItemTitle>
          Особливості роботи офіцера-психолога в умовах бойових дій
        </CourseItemTitle>
        <CourseItemDescription>
          Військовий інститут Київського національного університету імені Тараса
          Шевченка -{" "}
        </CourseItemDescription>
        <CourseItemDescription>
          Розпочався - 9 квіт 2024 р. 03:00 EEST
        </CourseItemDescription>
      </CourseItemContentWrapper>
    </CourseItemWrapper>
  );
};

export default CourseItem;
