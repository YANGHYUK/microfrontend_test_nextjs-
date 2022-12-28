import React, { Suspense } from "react";
import dynamic from "next/dynamic";

const ShopView = dynamic(
  () => {
    const mod = import("fe0/shop").then((data) => {
      console.log({ data });
      return data;
    });
    return mod;
  },
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transfor: "translate('-30%','50%')",
        }}
      >
        "LOADING ..."
      </div>
    ),
  }
);

const ShopPage = () => {
  return (
    <div>
      <ShopView />
    </div>
  );
};

export default ShopPage;
