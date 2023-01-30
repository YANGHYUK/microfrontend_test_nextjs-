import ServerSideRenderPage from "fe0/serverside-test";
const ServerSideTest = ServerSideRenderPage;
ServerSideTest.getInitialProps = ServerSideRenderPage.getInitialProps;
export default ServerSideTest;

// import dynamic from "next/dynamic";

// const ServerSideTest = dynamic(() => import("fe0/serverside-test"), {
//   loading: () => <>loading...</>,
//   ssr: false,
// });
// const ServerSideTestPage = ServerSideTest;
// ServerSideTestPage.getInitialProps = ServerSideTest.getInitialProps;
// export default ServerSideTestPage;
