import React from "react";

const  Grid=({medicine})=> {
  return  ( <div
        className="   flex overflow-x-auto min-w-[45%] sm:min-w-[28%] md:min-w-[20%] lg:min-w-[28%]  max-w-xl  mx-auto mr-3 sm:mr-4 md:mr-8 bg-[#1c1c1c] border-radius-2   mb-5 h-[50vh] sm:h-[40vh] md:h-[50vh] w-4 rounded-2xl inline-block bg-[url('/file.svg')] bg-cover bg-no-repeat bg-center">
        <img
            className=" p-2 min-w-[45%] sm:min-w-[30%] md:min-w-[20%] lg:min-w-[100%]  h-[70%] object-contain"
            src=
                {
                medicine.img?.substring(0, 66) +
                '0' +
                medicine.img?.substring(66, 72) +
                '0' +
                medicine.img?.substring(72)
            }
            alt={medicine.name || 'Medicine Image'}
        />
        <div className="content ml-[5%] text-white ">
            <h2 className="text-sm sm:text-md md:text-lg font-semibold truncate">{medicine.tabletname || medicine.capsulename}</h2>
            <p className="text-zinc-500">
                <strong>Price:</strong> ₹{medicine.price ? medicine.price.toFixed(2) : "unknown"}</p>
            <div className="   text-sm">Marketer: {medicine.marketer}</div>

        </div>
    </div>)
}
export default Grid;