import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  CustomIconButton,
  CustomLabel,
  CustomOutlinedInput,
  SearchForm,
} from "./SearchInput.styled";
import { InputAdornment } from "@mui/material";
export type TInput = {
  value?: string;
  onChangeInput: (value: string) => void;
  onSubmit: (clearInput?: boolean) => void;
};

const SearchInput: React.FC<TInput> = ({ value, onChangeInput, onSubmit }) => {
  const [isSubmit, setIsSubmit] = React.useState(false);
  return (
    <SearchForm
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
        setIsSubmit(true);
      }}
    >
      <CustomLabel>Шукати в курсах</CustomLabel>

      <CustomOutlinedInput
        sx={{ ml: 1, pr: 0, width: "300px", maxHeight: "50px" }}
        placeholder=""
        inputProps={{ "aria-label": "" }}
        value={value}
        onChange={(e) => {
          if (isSubmit) setIsSubmit(false);
          onChangeInput(e.target.value);
        }}
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
    </SearchForm>
  );
};
export default SearchInput;
