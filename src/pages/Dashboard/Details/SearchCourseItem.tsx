import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { TCourseItemData } from "./CourseItem";
import {
  SearchCourseItemWrapper,
  SearchCourseItemTitle,
  SearchCourseItemLink,
} from "./CourseItem.styled";

type TCourseItem = {
  course: TCourseItemData;
  keyId: string;
};

const SearchCourseItem: FC<TCourseItem> = ({ course, keyId }) => {
  const { title, url } = course;

  return (
    <>
      <SearchCourseItemWrapper
        onClick={() => url && window.open(url, "_blank")}
        key={keyId}
      >
        <SearchCourseItemLink onClick={() => url && window.open(url, "_blank")}>
          Показати <FontAwesomeIcon icon={faArrowRight} />
        </SearchCourseItemLink>
        <SearchCourseItemTitle>{title}</SearchCourseItemTitle>
      </SearchCourseItemWrapper>
    </>
  );
};

export default SearchCourseItem;
