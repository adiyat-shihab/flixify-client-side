import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const BrandDetails = () => {
  const param = useParams();
  const loader = useLoaderData();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5001/${param.name}`)
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

  console.log(param.name);
  return <></>;
};
