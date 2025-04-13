import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios.jsx";

const HorizontalCards = ({ datax }) => {
  const [category, setcategory] = useState("capsule");
  const [medicine, setmedicine] = useState([]);
  const [page, setPage] = useState(1);

  console.log(datax);
  const GetranMedicine = async () => {
    try {
      const { data } = await axios.post(`/getrandomdata`, {
        query: datax,
        size: 20,
      });
      console.log("th", data);
      if (data.length > 0) {
        setmedicine((preState) => [...preState, ...data]);
        setPage(page + 1);
        console.log("if", data);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = () => {
    if (medicine.length === 0) {
      GetranMedicine();
    } else {
      setPage(1);
      setmedicine([]);
      GetranMedicine();
    }
  };

  useEffect(() => {
    refreshHandler();
    GetranMedicine();
  }, [category]);

  return (
      <div className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.9)] w-full flex overflow-x-auto mb-5 pb-1 p-4 sm:p-5 md:p-6">
        {medicine.length > 0 ? (
            medicine.map((d, i) => (
                <Link
                    to={`/medicine/details/${d.tabletname || d.injectionname || d.capsulename}`}
                    key={i}
                    className="min-w-[45%] sm:min-w-[30%] md:min-w-[20%] lg:min-w-[15%] mr-3 sm:mr-4 md:mr-5 bg-zinc-900 mb-5 h-[50vh] sm:h-[40vh] md:h-[35vh] flex-shrink-0"
                >
                  <img
                      className="w-full h-[50%] sm:h-[55%] object-cover"
                      src={
                          d.img.substring(0, 66) +
                          "0" +
                          d.img.substring(66, 72) +
                          "0" +
                          d.img.substring(72, d.img.length)
                      }
                      alt={d.name || "Medicine"}
                  />
                  <div className="text-white p-2 sm:p-3 h-auto overflow-y-auto">
                    <h1 className="text-sm sm:text-md md:text-lg font-semibold truncate">
                      {d.tabletname || d.capsulename || d.injectionname}
                    </h1>
                    <p className="mb-2 sm:mb-4 text-xs sm:text-sm">
                      <span className="text-zinc-500">₹{d.price.toFixed(2)}</span>
                    </p>
                    <div className="relative">
                      <button className="px-2 py-1 sm:px-3 sm:py-2 mt-1 sm:mt-2 bg-[#6556CD] rounded text-xs sm:text-sm text-white">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </Link>
            ))
        ) : (
            <h1 className="text-xl sm:text-2xl md:text-3xl mt-5 text-white font-black text-center w-full">
              Nothing to show
            </h1>
        )}
      </div>
  );
};

export default HorizontalCards;