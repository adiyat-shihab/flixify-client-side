import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <div
        className=" bg-no-repeat bg-cover h-screen flex-col flex justify-center items-center"
        style={{
          backgroundImage: `url("https://images4.alphacoders.com/601/thumb-1920-601048.jpg")`,
        }}
      >
        <h1 className={"font-bold text-5xl text-white"}>
          You Enter An Wrong Page
        </h1>
        <Link to={"/"}>
          <button
            type="button"
            className="px-14 py-5 text-base bg-white text-black font-medium mt-6   hover:bg-gray-100 rounded"
          >
            Go Back
          </button>
        </Link>
      </div>
    </>
  );
};
