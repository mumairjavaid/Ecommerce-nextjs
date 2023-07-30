import Link from "next/link";
import mongoose from "mongoose";
import Product from "../models/Product";

const index = ({ products }) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {Object.keys(products).map((curr) => {
              return (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <Link
                    href={`/${products[curr].slug}`}
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      className=" w-[50%] h-full object-cover object-center block"
                      src={products[curr].variant}
                    />
                  </Link>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {products[curr].name}
                  </h2>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {products[curr].color.includes("red") && (
                        <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                      {products[curr].color.includes("blue") && (
                        <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                      {products[curr].color.includes("skyblue") && (
                        <button className="border-2 border-gray-300 ml-1 bg-sky-500 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                      {products[curr].color.includes("cyan") && (
                        <button className="border-2 border-gray-300 ml-1 bg-cyan-500 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                      {products[curr].color.includes("orange") && (
                        <button className="border-2 border-gray-300 ml-1 bg-orange-500 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                      {products[curr].color.includes("green") && (
                        <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                    </h3>
                    <p className="mt-1">Rs. {products[curr].price}</p>
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
  let products = await Product.find();
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
};
