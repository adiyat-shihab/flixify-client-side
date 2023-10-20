import { BrandsList } from "./BrandsList.jsx";

export const Brands = ({ loader }) => {
  console.log(loader);
  return (
    <div
      className={
        "grid grid-cols-1 xl:grid-cols-3 justify-items-center bg-[#050a0e] gap-y-6 py-32"
      }
    >
      {loader.map((data) => (
        <BrandsList data={data} key={data.id} />
      ))}
    </div>
  );
};
