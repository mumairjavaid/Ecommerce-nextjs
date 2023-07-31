import Link from "next/link";
import mongoose from "mongoose";
import Product from "../models/Product";

const index = ({ products, tshirts }) => {
  // console.log(products,"products here");
  // console.log(Object.keys(products), "Hi printing....");
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {Object.keys(tshirts).map((curr) => {
              // {products.map((curr) => {
              return (
                <div key={curr._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <Link
                    href={`/${tshirts[curr].slug}`}
                    // href={`/${curr.slug}`}
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      className=" w-[50%] h-full object-cover object-center block"
                      src={tshirts[curr].variant}
                      // src={curr.variant}
                    />
                  </Link>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {tshirts[curr].name}
                    {/* {curr.name} */}
                  </h2>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {tshirts[curr].color.includes("red") && (
                        <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                      {tshirts[curr].color.includes("blue") && (
                        <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                      {tshirts[curr].color.includes("skyBlue") && (
                        <button className="border-2 border-gray-300 ml-1 bg-sky-500 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                      {tshirts[curr].color.includes("cyan") && (
                        <button className="border-2 border-gray-300 ml-1 bg-cyan-500 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                      {tshirts[curr].color.includes("orange") && (
                        <button className="border-2 border-gray-300 ml-1 bg-orange-500 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                      {tshirts[curr].color.includes("green") && (
                        <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                    </h3>
                    <p className="mt-1">Rs. {tshirts[curr].price}</p>
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
  console.log(products);

  let tshirts = {};
  for (let item of products) {
    if (item.name in tshirts) {
      console.log("Called again.... hsdfkjhasdf", tshirts[item.name]);
      if (
        !tshirts[item.name].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        console.log(tshirts[item.name].color, "Item color");
        tshirts[item.name].color.push(item.color);
      }
      if (
        !tshirts[item.name].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        tshirts[item.name].size.push(item.size);
      }
    } else {
      tshirts[item.name] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        tshirts[item.name].color = [item.color];
        tshirts[item.name].size = [item.size];
      }
    }
  }

  return {
    props: {
      tshirts: JSON.parse(JSON.stringify(tshirts)),
    },
  };
};
