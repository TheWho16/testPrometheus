import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { CustomIconButton, CustomOutlinedInput } from "./SearchInput.styled";
import { InputAdornment } from "@mui/material";
export type TInput = {
  value?: string;
  onChangeInput: (value: string) => void;
  onSubmit: () => void;
};

const SearchInput: React.FC<TInput> = ({ value, onChangeInput, onSubmit }) => {
  return (
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
          <CustomIconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
          >
            <FontAwesomeIcon icon={faSearch} />
          </CustomIconButton>
        </InputAdornment>
      }
    />
  );
};
export default SearchInput;
