import { Link, Navigate } from "react-router-dom";

export const BrandsList = ({ data }) => {
  const { brand_image, brand_name, id } = data;
  return (
    <div
      className={
        "bg-gradient-to-tl from-violet-900 via-fuchsia-600 to-red-600 p-[1px] hover:bg-gradient-to-tl hover:from-red-900 hover:via-fuchsia-600 hover:to-violet-600 gradientbrand  "
      }
    >
      <div className="  w-96 bg-[#050a0e] h-full">
        <figure className="px-10 pt-10 h-[143px]  ">
          <div className={"flex justify-center items-center my-auto "}>
            <img
              src={brand_image}
              alt="Shoes"
              className="w-[100px]  h-full my-auto"
            />
          </div>
        </figure>
        <div className="card-body items-center text-center py-8">
          <Link to={`/brandDetails/${id}`}>
            <button className="btn btn--secondary ">
              <span className="btn__content ">{brand_name}</span>
              <span className="btn__glitch"></span>
              <span className="btn__label"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
