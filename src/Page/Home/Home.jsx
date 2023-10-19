import { Footer } from "../../Subpage/Footer/Footer.jsx";
import { Collection } from "../../Subpage/Collection.jsx";
import { Navbar } from "../../Subpage/Navbar.jsx";
import { Brands } from "../Brands/Brands.jsx";
import { useLoaderData } from "react-router-dom";
import { Section } from "../../Subpage/Section/Section.jsx";
import { Banner } from "../../Subpage/Banner/Banner.jsx";

export const Home = () => {
  const loader = useLoaderData();
  return (
    <>
      <Banner />
      <Section />
      <Brands loader={loader} />
      <Collection />
    </>
  );
};
