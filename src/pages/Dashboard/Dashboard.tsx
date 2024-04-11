import React, { FC, useState } from "react";
import { FlexColumn } from "../../components/Wrappers/Wrappers.styled";
import SearchInput from "../../components/Input";

import {
  DashboardContainer,
  DashboardContent,
  DashboardHeader,
  DashboardHeaderDesktop,
  DashboardWrapper,
  SearchContentSubText,
  SearchHeader,
  SearchInputWrapper,
} from "./Dashboard.styled";

import CourseItem from "./Details";
import { courseData } from "./mocedData";
import SearchCourseItem from "./Details/SearchCourseItem";
import { TCourseItemData } from "./Details/CourseItem";

const Dashboard: FC = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchCourses, setSearchCourses] = useState<
    undefined | TCourseItemData[]
  >();

  const handleSubmit = (clearInput?: boolean) => {
    console.log("clearInput", clearInput);
    if (clearInput) {
      setSearchInputValue("");
      setSearchCourses(undefined);
      return;
    }
    if (!searchInputValue || searchInputValue.trim().length === 0) {
      setSearchInputValue("");
      setSearchCourses(undefined);
      return;
    }
    setSearchCourses(
      courseData.filter((n) =>
        n.title.toLowerCase().includes(searchInputValue.toLowerCase())
      )
    );
  };
  console.log("searchCourses", searchCourses);

  return (
    <DashboardWrapper>
      <DashboardContainer>
        <DashboardHeaderDesktop>Мої курси</DashboardHeaderDesktop>
        <DashboardContent>
          <FlexColumn style={{ flexGrow: 1, gap: "10px" }}>
            <DashboardHeader>Мої курси</DashboardHeader>
            {courseData.map((item, index) => (
              <CourseItem
                keyId={`CourseItem-${item.id}-${index}`}
                key={`key-CourseItem-${item.id}-${index}`}
                course={item}
              />
            ))}
          </FlexColumn>
          <SearchInputWrapper>
            <SearchInput
              value={searchInputValue}
              onChangeInput={(value) => setSearchInputValue(value)}
              onSubmit={(clearInput) => handleSubmit(clearInput)}
            />

            {searchCourses && (
              <>
                <SearchHeader>
                  {searchCourses.length === 0
                    ? "На жаль, жодного результату не знайдено"
                    : "Результати пошуку"}
                </SearchHeader>

                <SearchContentSubText>
                  {searchCourses.length} збігів для {searchInputValue}
                </SearchContentSubText>
                {searchCourses.map((item, index) => (
                  <SearchCourseItem
                    key={`key-searchCourses-${item.id}-${index}`}
                    keyId={`SearchCourseItem-${item.id}-${index}`}
                    course={item}
                  />
                ))}
              </>
            )}
          </SearchInputWrapper>
        </DashboardContent>
      </DashboardContainer>
    </DashboardWrapper>
  );
};

export default Dashboard;
