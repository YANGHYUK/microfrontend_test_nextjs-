import "../styles/globals.css";
import App from "next/app";
import { useRouter } from "next/router";
import Header from "fe1/header";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pathname = router.pathname.split("/")[1];

  const pageTitle = {
    "": "",
  };

  return (
    <>
      <Header title={pageTitle[pathname]} />
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  console.log({ ctx });
  const appProps = await App.getInitialProps(ctx);
  return appProps;
};
export default MyApp;
