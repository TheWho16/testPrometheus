import React, { FC } from "react";
import Navbar from "../../components/Navbar";
import { BaseGrid } from "../../components/Wrappers/Wrappers.styled";
import Dashboard from "../Dashboard";

const Pages: FC = () => {
  return (
    <BaseGrid container>
      <Navbar />
      <Dashboard />
    </BaseGrid>
  );
};

export default Pages;
