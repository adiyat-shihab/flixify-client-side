import { Footer } from "../../Subpage/Footer/Footer.jsx";
import { Collection } from "../../Subpage/Collection.jsx";

export const Home = () => {
  return (
    <>
      <div className={"relative"}>
        <Collection />
      </div>
      <Footer />
    </>
  );
};
