import React, { FC, useState } from "react";
import { FlexColumn } from "../../components/Wrappers/Wrappers.styled";
import SearchInput from "../../components/Input";

import {
  DashboardContent,
  DashboardHeader,
  DashboardHeaderDesktop,
  DashboardWrapper,
} from "./Dashboard.styled";

import CourseItem from "./Details";

const Dashboard: FC = () => {
  const [searchInputValue, setSearchInputValue] = useState("");

  const handleSubmit = () => {
    console.log("searchInputValue", searchInputValue);
  };

  return (
    <DashboardWrapper>
      <DashboardHeaderDesktop>Мої курси</DashboardHeaderDesktop>
      <DashboardContent>
        <FlexColumn style={{ flexGrow: 1 }}>
          <DashboardHeader>Мої курси</DashboardHeader>
          <CourseItem />
        </FlexColumn>
        <SearchInput
          value={searchInputValue}
          onChangeInput={(value) => setSearchInputValue(value)}
          onSubmit={() => handleSubmit()}
        />
      </DashboardContent>
    </DashboardWrapper>
  );
};

export default Dashboard;
