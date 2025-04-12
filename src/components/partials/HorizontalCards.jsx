import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";

const HorizontalCards = ({ data }) => {
  return (
    <div className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.9)] w-[100%] flex  overflow-y-hidden mb-5 pb-1 h-fit  p-5">
      {data.length > 0 ? (
        data.map((d, i) => (
          <Link
            to={`/${d.media_type}/details/${d.id}`}
            key={i}
            className="min-w-[15%] mr-5 bg-zinc-900 mb-5 h-[35vh]"
          >
            <img
              className="w-full h-[55%] object-cover"
              src={
                //   d.backdrop_path || d.poster_path ? `https://image.tmdb.org/t/p/original/${
                //   d.backdrop_path || d.poster_path
                // }` :
                noimage
              }
              alt=""
            />
            <div className="text-white p-3 h-[45%] overflow-y-auto">
              <h1 className="text-xl font-semibold ">
                {/* {d.name || d.title || d.original_name || d.original_title} */}{" "}
                Medicine
              </h1>
              <p className="">
                {/* {d.overview.slice(0, 50)}... */}overview
                <span className="text-zinc-500">more</span>
              </p>
              <div>
                <button className="px-3 py-2 mt-2 bg-[#6556CD] rounded text-white">Add to Cart</button>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <h1 className="text-3xl mt-5 text-white font-black text-center">
          Nothing to show
        </h1>
      )}
    </div>
  );
};

export default HorizontalCards;
