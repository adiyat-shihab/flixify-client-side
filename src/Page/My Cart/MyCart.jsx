import { Link, useLoaderData } from "react-router-dom";
import { MyCartList } from "./MyCartList.jsx";
import { useEffect, useState } from "react";

export const MyCart = () => {
  const loader = useLoaderData();
  console.log(loader);
  const [mainData, setMainData] = useState(loader);

  console.log(mainData);
  return (
    <div
      className={
        "grid grid-cols-1 xl:grid-cols-3 bg-[#050a0e] justify-items-center gap-y-16 py-16"
      }
    >
      {mainData.length === 0 ? (
        <div className={"w-screen"}>
          <h1 className={"text-5xl text-white text-center mx-auto"}>
            No Data Found
          </h1>
        </div>
      ) : (
        mainData.map((data) => (
          <MyCartList
            data={data}
            key={data._id}
            setMainData={setMainData}
            mainData={mainData}
          />
        ))
      )}
    </div>
  );
};
