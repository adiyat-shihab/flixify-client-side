import { Link, useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Rate } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";

export const BrandDetails = () => {
  const param = useParams();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/${param.name}`)
      .then((data) => data.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <>
      <div
        className={
          "grid grid-cols-3 justify-items-center gap-y-6 py-16 bg-[#050a0e] "
        }
      >
        {datas.map((data) => (
          <div
            className={
              "bg-gradient-to-tl from-violet-900 via-fuchsia-600 to-red-600 p-[1px] hover:bg-gradient-to-tl hover:from-red-900 hover:via-fuchsia-600 hover:to-violet-600 w-fit   "
            }
          >
            <div className="  w-96 bg-[#050a0e] h-full ">
              <div
                className={
                  "flex justify-center h-[200px] items-center my-auto "
                }
              >
                <img
                  src={data.image}
                  alt="Shoes"
                  className=" rounded mt-4  h-full my-auto"
                />
              </div>
              <div>
                <h3 className={" mt-6 text-white text-center text-xl"}>
                  {data.name}
                </h3>
              </div>
              <div
                className={
                  "text-white my-5 text-center flex justify-between items-center px-14"
                }
              >
                <p>Brand : {data.brand}</p>
                <p>Type : {data.type}</p>
              </div>
              <div
                className={"text-white flex justify-between items-center px-14"}
              >
                <p>${data.price}</p>
                <Rate
                  disabled
                  defaultValue={data.rating}
                  character={({ index, value }) => {
                    if (value >= index + 1) {
                      return <StarFilled style={{ color: "#ff003c" }} />;
                    }
                    return <StarOutlined style={{ color: "#ff003c" }} />;
                  }}
                />
              </div>

              <div className="card-body items-center flex px-4 gap-6 text-center py-8">
                <button className="btn btn--secondary ">
                  <span className="btn__content ">Details</span>
                  <span className="btn__glitch"></span>
                  <span className="btn__label"></span>
                </button>{" "}
                <button className="btn btn--secondary ">
                  <span className="btn__content ">Update</span>
                  <span className="btn__glitch"></span>
                  <span className="btn__label"></span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
