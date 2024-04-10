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

export type TCourseItemData = {
  title: string;
  description: string;
  startDate: string;
  id: string;
  img: string;
  url?: string;
};

type TCourseItem = {
  course: TCourseItemData;
  keyId: string;
};

const CourseItem: FC<TCourseItem> = ({ course, keyId }) => {
  const { title, description, startDate, id, img, url } = course;
  const [anchorElCourseItem, setAnchorCourseItem] =
    useState<null | HTMLElement>(null);

  const [openSubscribeDialog, setOpenSubscribeDialog] =
    useState<boolean>(false);

  const [openEmailDialog, setOpenEmailDialog] = useState<boolean>(false);

  const handleOpenCourseItemMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorCourseItem(event.currentTarget);
  };

  const handleCloseCourseItemMenu = () => {
    console.log("handleCloseCourseItemMenu");
    setAnchorCourseItem(null);
  };

  return (
    <>
      <CourseItemWrapper key={keyId}>
        <CourseItemImgWrapper>
          <CourseItemImg src={img} />
        </CourseItemImgWrapper>
        <CourseItemContentWrapper>
          {url ? (
            <CourseItemTitle
              style={{ cursor: "pointer" }}
              onClick={() => window.open(url, "_blank")}
            >
              {title}
            </CourseItemTitle>
          ) : (
            <CourseItemTitle>{title}</CourseItemTitle>
          )}
          <CourseItemDescription>{description}</CourseItemDescription>
          <CourseItemDescription>{startDate}</CourseItemDescription>
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
                  <ButtonOutline onClick={() => setOpenEmailDialog(true)}>
                    Налаштування електронної пошти
                  </ButtonOutline>
                </FlexColumn>
              </Menu>
            </FlexColumn>
          </CourseItemButtonsWrapper>
        </CourseItemContentWrapper>
      </CourseItemWrapper>
      <CustomDialog
        open={openSubscribeDialog}
        handleClose={() => setOpenSubscribeDialog(false)}
        title={`ВИ ВПЕВНЕНІ, ЩО ХОЧЕТЕ ВІДПИСАТИСЯ ВІД ${title}(${id})?`}
        buttonText="Відписатися від курсу"
      />
      <CustomDialog
        open={openEmailDialog}
        handleClose={() => setOpenEmailDialog(false)}
        title={`НАЛАШТУВАННЯ ЕЛЕКТРОННОЇ ПОШТИ ДЛЯ ${id}?`}
        buttonText="Зберегти налаштування"
        isCheckMark
        isMarkText="Отримувати листи від курсу"
      />
    </>
  );
};

export default CourseItem;
