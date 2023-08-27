import React from "react";
import { products } from "../constants";
import PopularCard from "../components/PopularCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className=" flex flex-col justify-start gap-5">
        <h2 className=" text-4xl font-palanquin font-bold">
          Our <span className=" text-coral-red">Popular </span> Products
        </h2>
        <p className=" text-slate-gray font-montserrat mt-2 lg:max-w-lg">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-16 sm:gap-4 gap-14">
        {
            products.map((product)=>(
                <PopularCard key = {product.nam} {...product}/>
            ))
        }
      </div>
    </section>
  );
};

export default PopularProducts;
