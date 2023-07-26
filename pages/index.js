import Link from "next/link";
import mongoose from "mongoose";
import Product from "../models/Product";

const index = ({ products }) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((curr) => {
              return (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <Link
                    href="/page"
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      className=" w-full h-full object-cover object-center block"
                      src={curr.variant}
                    />
                  </Link>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {curr.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {curr.title}
                    </h2>
                    <p className="mt-1">${curr.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default index;

export const getServerSideProps = async () => {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({ color: "cyan" });
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
};
