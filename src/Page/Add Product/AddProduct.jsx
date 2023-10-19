import "/src/Subpage/cyberpunkButton.css";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import { useState } from "react";
export const AddProduct = () => {
  const [rating, setRating] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const brand = form.brand.value;
    const name = form.name.value;
    const image = form.image.value;
    const price = form.price.value;
    const type = form.type.value;
    const description = form.description.value;
    console.log(brand, name, image, price, type, description, rating);
    const product = { brand, name, image, price, type, description, rating };

    if (brand === "netflix") {
      return fetch("http://localhost:5001/netflix", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.insertedId) {
            console.log("user added to the database");
          }
        });
    }
    if (brand === "disney") {
      return fetch("http://localhost:5001/disney", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.insertedId) {
            console.log("user added to the database");
          }
        });
    }
    if (brand === "warnerbros") {
      return fetch("http://localhost:5001/warnerbros", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.insertedId) {
            console.log("user added to the database");
          }
        });
    }
    if (brand === "sony") {
      return fetch("http://localhost:5001/sony", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.insertedId) {
            console.log("user added to the database");
          }
        });
    }
    if (brand === "spotify") {
      return fetch("http://localhost:5001/spotify", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.insertedId) {
            console.log("user added to the database");
          }
        });
    }
    if (brand === "amazonprime") {
      return fetch("http://localhost:5001/amazonprime", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.insertedId) {
            console.log("user added to the database");
          }
        });
    }
    return console.log(product);
  };
  return (
    <div className="bg-[#050a0e] pt-20 pb-20 ">
      <section className="max-w-4xl p-6 mx-auto bg-[#ff003c] text-[#050a0e] rounded-md shadow-md dark:bg-gray-800 pt-20 pb-20">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white ">
          Account settings
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-[#050a0e] fontButton font-bold dark:text-gray-200 text-[#050a0e]">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                name="name"
              />
            </div>

            <div>
              <label className="text-[#050a0e] fontButton font-bold dark:text-gray-200">
                Image URL
              </label>
              <input
                id="image"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                name="image"
              />
            </div>

            <div>
              <label className="text-[#050a0e] fontButton font-bold dark:text-gray-200">
                Price
              </label>
              <input
                id="price"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                name="price"
              />
            </div>

            <div>
              <label className="text-[#050a0e] fontButton font-bold dark:text-gray-200">
                Brand Name
              </label>
              <select
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                name="brand"
              >
                <option value="netflix">NetFlix</option>
                <option value="disney">Disney</option>
                <option value="warnerbros">Warner Bros</option>
                <option value="amazonprime">Amazon Prime</option>
                <option value="spotify">Spotify</option>
                <option value="sony">Sony</option>
              </select>
            </div>
            <div>
              <label className="text-[#050a0e] fontButton font-bold dark:text-gray-200">
                Type
              </label>
              <select
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                name="type"
              >
                <option value="movie">Movie</option>
                <option value="gaming">Gaming</option>
                <option value="web series">Web Series</option>
                <option value="music">Music</option>
                <option value="cartoon">Cartoon</option>
                <option value="toys">Toys</option>
              </select>
            </div>
            <div>
              <label className="text-[#050a0e] fontButton font-bold dark:text-gray-200">
                Rating
              </label>
              <div className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <Rate
                  onChange={(value) => setRating(value)}
                  character={({ index, value }) => {
                    if (value >= index + 1) {
                      return <StarFilled style={{ color: "#ff003c" }} />;
                    }
                    return <StarOutlined style={{ color: "#000000" }} />;
                  }}
                />
              </div>
            </div>
          </div>
          <div className="">
            <label className="text-[#050a0e] fontButton font-bold dark:text-gray-200 w=">
              Short Description
            </label>
            <textarea
              id="description"
              name="description"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div className="flex justify-end mt-6">
            <button className="btn btn--secondary ">
              <span className="btn__content ">Add</span>
              <span className="btn__glitch"></span>
              <span className="btn__label"></span>
              <input type="submit" />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
