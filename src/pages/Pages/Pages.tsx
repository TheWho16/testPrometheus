import React, { FC } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { BaseGrid } from "../../components/Wrappers/Wrappers.styled";
import Dashboard from "../Dashboard";

const Pages: FC = () => {
  return (
    <BaseGrid container>
      <Navbar />
      <Dashboard />
      <Footer />
    </BaseGrid>
  );
};

export default Pages;
