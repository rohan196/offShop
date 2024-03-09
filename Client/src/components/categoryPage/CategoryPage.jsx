import React from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { IoFilterOutline } from "react-icons/io5";
import CategoryItem from "./CategoryItem";
const CategoryPage = () => {
  return (
    <div className="container flex flex-col gap-2 mt-2">
      <div className="encloser flex flex-row w-11/12  m-auto ">
        <div className="what_category w-full ">
          <div className="top flex   items-center gap-2">
            <p className="text-sm text-opacity-10">Home</p>
            <LiaGreaterThanSolid />
            <p className="text-sm">Causal</p>
          </div>
          <div className="bottom flex items-center justify-between mt-4 ">
            <p className="text-2xl font-bold">Causal</p>
            <div className="p-1 bg-[#EFEFEF] rounded-full">
              <IoFilterOutline />
            </div>
          </div>
        </div>
      </div>
        <div className="category_main grid grid-cols-2 gap-1 w-11/12 m-auto border-b border-black border-opacity-10 pb-[30px]">

            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>


        </div>




    </div>
  );
};

export default CategoryPage;
