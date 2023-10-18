import { Footer } from "../../Subpage/Footer/Footer.jsx";
import { Collection } from "../../Subpage/Collection.jsx";
import { Navbar } from "../../Subpage/Navbar.jsx";
import { Brands } from "../Brands/Brands.jsx";
import { useLoaderData } from "react-router-dom";

export const Home = () => {
  const loader = useLoaderData();
  return (
    <>
      <Brands loader={loader} />
      <Collection />
    </>
  );
};
