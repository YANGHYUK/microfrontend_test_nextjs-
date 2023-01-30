import * as React from "react";
import Link from "next/link";

const Header = (props) => {
  return (
    <div
      style={{
        background: "black",
        width: "100%",
        height: "100px",
        color: "white",
        textAlign: "center",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        fontSize: "24px",
        paddingLeft: "15px",
      }}
    >
      <span style={{ margin: "0 10px" }}>{props?.title}</span>

      <span style={{ margin: "0 10px" }}>
        <Link href="/">home</Link>
      </span>

      <span style={{ margin: "0 10px" }}>
        <Link href="/shop">shop</Link>
      </span>
      <span style={{ margin: "0 10px" }}>
        <Link href="/serverside-test">serverside-test</Link>
      </span>
      <span style={{ margin: "0 10px" }}>
        <Link href="/static-test">static-test</Link>
      </span>
    </div>
  );
};

export default Header;
