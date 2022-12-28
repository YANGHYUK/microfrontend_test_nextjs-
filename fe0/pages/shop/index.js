import React, { Suspense, useEffect, useMemo, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const FetchingDynamic = dynamic(
  () => {
    const mod = import("../component/ShopFetching").then((data) => {
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

const Shop = (props) => {
  return (
    <div>
      <Head>
        <title>Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hero">
        <h1>Shop Page testest</h1>
      </div>
      <div className="title">
        <h1>fetching-data</h1>
        <FetchingDynamic />
      </div>
      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 20px;
        }
        .title,
        .description {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Shop;
