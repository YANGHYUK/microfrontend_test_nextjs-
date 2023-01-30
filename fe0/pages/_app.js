import "../styles/globals.css";
import App from "next/app";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// MyApp.getInitialProps = async (ctx) => {
//   const appProps = await App.getInitialProps(ctx);
//   return appProps;
// };
export default MyApp;
