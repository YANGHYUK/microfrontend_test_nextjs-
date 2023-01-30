import dynamic from "next/dynamic";

const Static = dynamic(() => import("fe0/static-test"), {
  loading: () => <>loading...</>,
  ssr: false,
});

export default Static;
