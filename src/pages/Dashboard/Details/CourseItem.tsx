import React, { FC, useState } from "react";

import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, Menu } from "@mui/material";
import { CourseImg1 } from "../../../assets/img";
import { ButtonOutline } from "../../../components/Buttons";
import { FlexColumn } from "../../../components/Wrappers/Wrappers.styled";
import {
  CourseItemWrapper,
  CourseItemImgWrapper,
  CourseItemImg,
  CourseItemContentWrapper,
  CourseItemTitle,
  CourseItemDescription,
  CourseItemButtonsWrapper,
} from "./CourseItem.styled";
import CustomDialog from "../../../components/Dialog";

const CourseItem: FC = () => {
  const [anchorElCourseItem, setAnchorCourseItem] =
    useState<null | HTMLElement>(null);

  const [openSubscribeDialog, setOpenSubscribeDialog] =
    useState<boolean>(false);

  const handleOpenCourseItemMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorCourseItem(event.currentTarget);
  };

  const handleCloseCourseItemMenu = () => {
    console.log("handleCloseCourseItemMenu");
    setAnchorCourseItem(null);
  };

  return (
    <>
      <CourseItemWrapper>
        <CourseItemImgWrapper>
          <CourseItemImg src={CourseImg1} />
        </CourseItemImgWrapper>
        <CourseItemContentWrapper>
          <CourseItemTitle>
            Особливості роботи офіцера-психолога в умовах бойових дій
          </CourseItemTitle>
          <CourseItemDescription>
            Військовий інститут Київського національного університету імені
            Тараса Шевченка -{" "}
          </CourseItemDescription>
          <CourseItemDescription>
            Розпочався - 9 квіт 2024 р. 03:00 EEST
          </CourseItemDescription>
          <ButtonOutline style={{ width: "40%", margin: "6px auto" }}>
            Переглянути курс
          </ButtonOutline>
          <CourseItemButtonsWrapper>
            <FlexColumn>
              <IconButton onClick={handleOpenCourseItemMenu}>
                <FontAwesomeIcon icon={faGear} color="#244B83" width="15px" />
              </IconButton>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-settings"
                anchorEl={anchorElCourseItem}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElCourseItem)}
                onClose={handleCloseCourseItemMenu}
              >
                <FlexColumn
                  style={{ width: "180px", gap: "6px", padding: "10px" }}
                >
                  <ButtonOutline onClick={() => setOpenSubscribeDialog(true)}>
                    Відписатися від курсу
                  </ButtonOutline>
                  <ButtonOutline>Налаштування електронної пошти</ButtonOutline>
                </FlexColumn>
              </Menu>
            </FlexColumn>
          </CourseItemButtonsWrapper>
        </CourseItemContentWrapper>
      </CourseItemWrapper>
      <CustomDialog
        open={openSubscribeDialog}
        handleClose={() => setOpenSubscribeDialog(false)}
        title="ВИ ВПЕВНЕНІ, ЩО ХОЧЕТЕ ВІДПИСАТИСЯ ВІД ОСОБЛИВОСТІ РОБОТИ ОФІЦЕРА-ПСИХОЛОГА В УМОВАХ БОЙОВИХ ДІЙ (FWOP101)?"
        buttonText="Відписатися від курсу"
      />
    </>
  );
};

export default CourseItem;
