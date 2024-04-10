import styled from "styled-components";

export const DialogWrapper = styled.div`
  border-radius: 3px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
  background: #313131;
  color: #313131;
  position: relative;
  padding: 10px;
`;
export const DialogContent = styled.div`
  background: #fbfbfb;
  border-radius: 0;
  border: 1px solid rgba(0, 0, 0, 0.9);
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
`;

export const CloseDialogButtonIcon = styled.button`
  background: transparent;
  border: none;
  outline: none;
  position: absolute;
  top: 10px;
  right: 16px;
  color: inherit;
  padding: 4px;
  cursor: pointer;
  z-index: 2;

  color: #e6e6e6 !important;
  @media (hover: hover) {
    &:hover {
      color: #000 !important;
    }
  }

  @media (hover: none) {
    &:active {
      color: #000 !important;
    }
  }
`;

export const DialogButtonTitle = styled.h2`
  font-weight: bold;
  font-size: 19px;
  line-height: 20px;
  text-transform: uppercase;
  color: #000;
  text-align: center;
  padding-bottom: 15px;
  border-bottom: 2px solid grey;
  margin-bottom: 35px;
}
`;
