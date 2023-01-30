import React from "react";
import Head from "next/head";

const StaticTest = ({ swapi }) => {
  console.log({ swapi });
  return (
    <div>
      <Head>
        <title>Static-Test</title>
        <link rel="icon" href="/nextjs-ssr/checkout/public/favicon.ico" />
      </Head>

      <div className="hero">
        <h1>Static test page</h1>
        <h3 className="title">
          This is a federated page owned by localhost:3000
        </h3>
        <span>
          {" "}
          Data from federated <pre>getStaticProps</pre>
        </span>
        <br />
        <pre>{JSON.stringify(swapi, null, 2)}</pre>
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

export async function getStaticProps(context) {
  console.log("fe0 getStaticProps");
  const swapi = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  ).then((res) => res.json());
  return {
    props: { swapi }, // will be passed to the page component as props
  };
}

export default StaticTest;
