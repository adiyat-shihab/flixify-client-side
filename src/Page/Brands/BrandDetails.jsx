import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Rate } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Carousel } from "antd";

export const BrandDetails = () => {
  const width = {
    width: "100rem",
    height: "25rem",
  };
  const param = useParams();
  const [datas, setDatas] = useState([]);
  console.log(datas);
  useEffect(() => {
    fetch(`http://localhost:5001/${param.name}`)
      .then((data) => data.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <>
      <div className={"py-16 bg-black"}>
        {" "}
        {datas.length !== 0 && (
          <Carousel autoplay>
            <div className={"flex justify-center bg-black"}>
              <img
                src={datas[0]?.image}
                style={width}
                alt=""
                className={"w-fit h-fit mx-auto"}
              />
            </div>
            <div className={"bg-black"}>
              <img
                src={datas[1]?.image}
                style={width}
                alt=""
                className={"mx-auto"}
              />
            </div>
            <div className={"bg-black"}>
              <img
                src={datas[2]?.image}
                style={width}
                alt=""
                className={"mx-auto"}
              />
            </div>
          </Carousel>
        )}
      </div>
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
                  "flex justify-center h-[200px] items-center px-4 my-auto "
                }
              >
                <img
                  src={data.image}
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
