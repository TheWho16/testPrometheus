import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  CustomIconButton,
  CustomLabel,
  CustomOutlinedInput,
} from "./SearchInput.styled";
import { InputAdornment } from "@mui/material";
import { FlexColumn } from "../Wrappers/Wrappers.styled";
export type TInput = {
  value?: string;
  onChangeInput: (value: string) => void;
  onSubmit: (clearInput?: boolean) => void;
};

const SearchInput: React.FC<TInput> = ({ value, onChangeInput, onSubmit }) => {
  const [isSubmit, setIsSubmit] = React.useState(false);
  return (
    <FlexColumn>
      <CustomLabel>Шукати в курсах</CustomLabel>

      <CustomOutlinedInput
        sx={{ ml: 1, pr: 0, width: "300px", maxHeight: "50px" }}
        placeholder=""
        inputProps={{ "aria-label": "" }}
        value={value}
        onChange={(e) => onChangeInput(e.target.value)}
        endAdornment={
          <InputAdornment
            sx={{
              height: "100% !important",
              minHeight: "100% !important",
              maxHeight: "100% !important",
            }}
            position="end"
          >
            {!isSubmit ? (
              <CustomIconButton
                type="button"
                sx={{ p: "10px" }}
                aria-label="search"
                onClick={() => {
                  onSubmit();
                  setIsSubmit(true);
                }}
              >
                <FontAwesomeIcon icon={faSearch} />
              </CustomIconButton>
            ) : (
              <CustomIconButton
                type="button"
                sx={{ p: "10px" }}
                aria-label="search"
                onClick={() => {
                  onSubmit(true);
                  setIsSubmit(false);
                }}
              >
                <FontAwesomeIcon icon={faXmark} />
              </CustomIconButton>
            )}
          </InputAdornment>
        }
      />
    </FlexColumn>
  );
};
export default SearchInput;
