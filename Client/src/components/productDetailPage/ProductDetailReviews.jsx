import React from "react";

const ProductDetailReviews = () => {
  return (
    <div className="container flex flex-col  lg:m-auto">
      <div className="write_a_review m-auto mt-1 flex justify-between w-11/12 ">
        <div className="flex gap-2">
          <h2 className="font-bold">All Reviews</h2>
          <p>451</p>
        </div>

        <div className="w-[120px] py-2 bg-black rounded-full text-white flex justify-center items-center">
          <p className="text-xs font-medium">Write a review</p>
        </div>

      </div>
        <div className="reviews w-10/12 m-auto py-5 grid grid-cols-1 gap-3 items-center lg:grid-cols-2 lg:w-10/12">

            <div className="review flex flex-col border border-black border-opacity-10 p-2 rounded-lg">
                <p className="font-bold">Samantha D.</p>
                <p className="text-sm mt-2">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                <p className="mt-2">Post on Augest 14 2023</p>
            </div>
            <div className="review flex flex-col border border-black border-opacity-10 p-2 rounded-lg">
                <p className="font-bold">Samantha D.</p>
                <p className="text-sm mt-2">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                <p className="mt-2">Post on Augest 14 2023</p>
            </div>
            <div className="review flex flex-col border border-black border-opacity-10 p-2 rounded-lg">
                <p className="font-bold">Samantha D.</p>
                <p className="text-sm mt-2">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                <p className="mt-2">Post on Augest 14 2023</p>
            </div>
            <div className="review flex flex-col border border-black border-opacity-10 p-2 rounded-lg">
                <p className="font-bold">Samantha D.</p>
                <p className="text-sm mt-2">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                <p className="mt-2">Post on Augest 14 2023</p>
            </div>

            <div className="loadmore w-[180px] py-2 text-center mt-2 lg:mt-0 border-opacity-10 rounded-full border border-black">
                <p>Load More Reviews</p>
            </div>

        </div>
    </div>
  );
};

export default ProductDetailReviews;
