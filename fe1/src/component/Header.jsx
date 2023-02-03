import * as React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
const HeaderContainer = styled.div`
  background-color: black;
  width: 100%;
  height: 100px;
  color: white;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 24px;
  padding-left: 15px;
`;

const Header = (props) => {
  return (
    <HeaderContainer>
      <span style={{ margin: "0 10px" }}>{props?.title}</span>

      <span style={{ margin: "0 10px" }}>
        <Link href="/">home</Link>
      </span>

      <span style={{ margin: "0 10px" }}>
        <Link href="/shop">shop</Link>
      </span>
    </HeaderContainer>
  );
};

export default Header;
