import "../styles/globals.css";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const Header = dynamic(
  () => {
    const mod = import("fe1/header");
    return mod;
  },
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pathname = router.pathname.split("/")[1];
  console.log({ pathname });
  const pageTitle = { "": "HomePage", shop: "ShopPage" };

  return (
    <>
      <Header title={pageTitle[pathname]} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
