import { useEffect, useState, useMemo } from "react";

const ShopFetching = (props) => {
  const [data, setData] = useState([]);
  const fetchingReq = async () => {
    const swapi = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    ).then((res) => res.json());
    setData(swapi);
  };

  useEffect(() => {
    fetchingReq();
  }, []);

  const listVeiw = useMemo(() => {
    return data.map((d) => {
      return (
        <div key={d?.id}>
          <p>
            {d?.albumId} {d?.title} {d?.year}
          </p>
          <img width={200} src={d.thumbnailUrl} />
        </div>
      );
    });
  }, [data]);

  return listVeiw;
};

ShopFetching.getInitialProps = async () => {
  const swapi = await fetch("https://swapi.dev/api/people/1").then((res) =>
    res.json()
  );
  return swapi;
};
export default ShopFetching;
