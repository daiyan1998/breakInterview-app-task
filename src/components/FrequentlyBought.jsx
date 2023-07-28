import React from "react";
import Rating from "./Rating";
import { data } from "autoprefixer";

const datas = [1, 2, 3];

const FrequentlyBought = () => {
  return (
    <div className="border border-black p-6">
      <h4 className="text-2xl font-bold mb-6">Frequently Bought Together</h4>
      <div className="flex flex-col gap-3">
        {datas.map((data) => (
          <div key={data} className="flex gap-4 justify-between">
            <div className="flex gap-4">
              <img
                className="h-[120px] w-[200px] object-cover"
                src="/angular1.jpg"
                alt=""
              />
              <div>
                <h6 className=" font-bold">Angular - The Complete Guide</h6>
                <p className="text-xs ">Maximilian Schwarzmuller</p>
                <p className="flex gap-2">
                  <Rating rating={4.6} />{" "}
                  <span className="text-sm font-light">188,403</span>
                </p>
                <div className=" ">
                  <button className="bg-yellow-200 p-1 text-sm text-black">
                    Bestseller
                  </button>
                </div>
              </div>
            </div>
            <div className="font-bold">$65.44</div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div className="text-lg mt-6">
          Total <span className="font-bold">$223.34</span>
        </div>
        <button className="bg-purple-500 hover:bg-purple-600 text-white p-2">
          Add all to cart
        </button>
      </div>
    </div>
  );
};

export default FrequentlyBought;
