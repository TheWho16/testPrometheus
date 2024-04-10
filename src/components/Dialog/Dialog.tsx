import React, { FC, useState } from "react";
import { Checkbox, Dialog } from "@mui/material";
import {
  CheckboxLabel,
  CloseDialogButtonIcon,
  DialogButtonTitle,
  DialogContent,
  DialogSubContent,
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
          <DialogSubContent>
            {isCheckMark && (
              <CheckboxLabel
                style={{ width: "100%" }}
                control={<Checkbox defaultChecked />}
                label={isMarkText}
              />
            )}
            <DefaultButton style={{ width: "100%" }}>
              {buttonText}
            </DefaultButton>
          </DialogSubContent>
        </DialogContent>
      </DialogWrapper>
    </Dialog>
  );
};

export default CustomDialog;
