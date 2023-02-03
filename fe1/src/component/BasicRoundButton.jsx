import styled from "@emotion/styled";

import React from "react";

export const colors = {
  white: "#fff",
  black: "#000",
  black1: "#121212",
  black2: "#222222",
  darkGray: "#6C6C73",
  darkMiddleGray: "#76777E",
  blueGray: "#868E96",
  lightBlack: "#444444",
  lightGray1: "#D3D3D3",
  lightGray2: "#E0E0E0",

  fadeGray2: "#C4C4C4",
  fadeGray1: "#F4F4F4",

  textColor: "#222222",
  lineGray: "#828282",
  textBorderActive: "#828282",
  textBorderInActive: "#828282",

  //point-color
  veryPery: "#6667AB",
  lightVeryPerry1: "#CBCBF3",
  lightVeryPerry2: "#E5E5F6",
  lightVeryPerry3: "#F3F3F8",
  lightPink: "#FCF0FE",
  pink: "#BE7FDC",
  red: "#FF0000",

  //text-color
  textBlack1: "#121212",
  textBlack2: "#222222",
  textBlueGray: "#868E96",
  titleGray: "#808080",

  //error
  textError: "#DE3B3B",
};

const BasicRoundButtonContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;
const Button = styled.button`
  background-color: ${(props) =>
    props.active ? colors.veryPery : colors.textBlueGray};

  min-width: 16rem;
  width: 100%;
  min-height: 4.2rem;
  height: 100%;
  border: solid 1px ${colors.lightGray2};
  border-radius: 0.8rem;
  word-break: keep-all;
  color: ${colors.white};
  font-size: 1.6rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &.white {
    background-color: #fff;
    color: #000;
  }
  &:active {
    /* background-color: ${colors.veryPery}; */
    opacity: 0.8;
  }
  &:disabled {
    background-color: ${colors.darkGray};
    color: ${colors.fadeGray2};
    cursor: not-allowed;
  }
`;

const BasicRoundButton = ({
  type,
  active = false,
  disabled,
  buttonStyle,
  containerStyle,
  value,
  onClick,
}) => {
  return (
    <BasicRoundButtonContainer
      disabled={disabled}
      style={{ ...containerStyle }}
    >
      <Button
        active={active}
        className={type}
        disabled={disabled}
        style={{ ...buttonStyle }}
        onClick={onClick}
      >
        {value}
      </Button>
    </BasicRoundButtonContainer>
  );
};

export default BasicRoundButton;
