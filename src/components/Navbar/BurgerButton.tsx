import React, { FC, useState } from "react";
import { BurgerWrapper } from "./Navbar.styled";

type TBurgerButton = {
  isActive: boolean;
};
const BurgerButton: FC<TBurgerButton> = ({ isActive }) => {
  return (
    <BurgerWrapper $isActive={isActive}>
      <div className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </BurgerWrapper>
  );
};

export default BurgerButton;
