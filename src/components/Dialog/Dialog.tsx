import React, { FC, useState } from "react";
import { Dialog } from "@mui/material";
import {
  CloseDialogButtonIcon,
  DialogButtonTitle,
  DialogContent,
  DialogWrapper,
} from "./Dialog.styled";
import { DefaultButton } from "../Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type TCustomDialog = {
  open: boolean;
  handleClose: VoidFunction;
  title: string;
  buttonText: string;
  isCheckMark?: boolean;
  isMarkText?: string;
};

const CustomDialog: FC<TCustomDialog> = ({
  open,
  handleClose,
  title,
  buttonText,
  isCheckMark,
  isMarkText,
}) => {
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogWrapper>
        <CloseDialogButtonIcon onClick={handleClose}>
          <FontAwesomeIcon icon={faXmark} size="2x" />
        </CloseDialogButtonIcon>

        <DialogContent>
          <DialogButtonTitle>{title}</DialogButtonTitle>
          <DefaultButton>{buttonText}</DefaultButton>
        </DialogContent>
      </DialogWrapper>
    </Dialog>
  );
};

export default CustomDialog;
