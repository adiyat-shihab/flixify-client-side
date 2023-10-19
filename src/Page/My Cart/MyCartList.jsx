import { Rate } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

export const MyCartList = ({ data, mainData, setMainData }) => {
  const { brand, name, image, price, type, description, rating, _id } = data;
  console.log(data);
  const handleDelete = (_id) => {
    fetch(`http://localhost:5001/products/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.deletedCount > 0) {
          toast.success("Your Card was Delete");
          const remaining = mainData.filter((data) => data._id !== _id);
          setMainData(remaining);
          console.log("data was delete");
        }
      });
  };
  return (
    <>
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
            <img src={data.image} className=" rounded mt-4  h-full my-auto" />
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
          <div className={"text-white flex justify-between items-center px-14"}>
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

          <div className="card-body items-center flex px-4 justify-center gap-6 text-center py-8 ">
            {" "}
            <button
              className="btn btn--secondary "
              onClick={() => handleDelete(_id)}
            >
              <span className="btn__content ">Delete</span>
              <span className="btn__glitch"></span>
              <span className="btn__label"></span>
            </button>
          </div>
        </div>
        <div>
          <Toaster />
        </div>
      </div>
    </>
  );
};
