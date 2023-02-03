import "../styles/globals.css";
import App from "next/app";
import { useRouter } from "next/router";
import Header from "fe1/header";
import BasicRoundButton from "fe1/basicRoundButton";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pathname = router.pathname.split("/")[1];

  const pageTitle = {
    "": "",
  };

  return (
    <>
      <Header title={pageTitle[pathname]} />
      <BasicRoundButton value="emotion 스타일 테스트~" />
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  return appProps;
};
export default MyApp;
