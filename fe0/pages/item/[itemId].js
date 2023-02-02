import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ItemIdPage = ({ itemId }) => {
  const router = useRouter();
  console.log({ router, itemId });
  return (
    <div>
      <div>ItemIdPage : {itemId}</div>
      <div>
        <Link href="/">Back to blog</Link>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const query = context?.query;
  return { props: { ...query } };
};
export default ItemIdPage;
