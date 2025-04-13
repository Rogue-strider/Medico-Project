import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";

const Cards = ({ data, title }) => {


    // data.map((c)=>{let imgurl = `${c.img}`;
    //     const newurl=  imgurl.substring(0,66) + "0"  + imgurl.substring(66,72)+ "0" +imgurl.substring(72,imgurl.length)
    //     console.log( imgurl.substring(0,66) + "0"  + imgurl.substring(66,72)+ "0" +imgurl.substring(72,imgurl.length))
    // });

console.log("data",data);
  return (
      <div className="flex flex-wrap w-full h-full px-[5%] bg-[#1F1E24]">
        {data.map((c) => (
            <Link
                to={`/medicine/details/${typeof s === "string" ? c : c.name || c.tabletname || c.injectionname || c.capsulename}`}// Adjust based on your routing
                className="relative w-[20vw] bg-white mr-[5%] mb-[5%]"
                key={c.data} // Use c.id for unique key
            >

              <img
                  className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[40vh] w-[75vh] object-contain"
                  src={c.img.substring(0,66) + "0"  + c.img.substring(66,72)+ "0" + c.img.substring(72,c.img.length)} // Use c.image or fallback to noimage
                  alt={c.name || "Medicine"}
              />
              <h1 className="text-2xl text-zinc-900 mt-3 px-3 py-1 font-semibold">

                {c.tabletname || c.injectionname || c.capsulename }
              </h1>
                <h1 className="text-sm text-zinc-900 mt-3 px-3 py-1 font-semibold">
                    INR: {c.price.toFixed(2)}
                </h1>


            </Link>
        ))}
      </div>
  );
};

export default Cards;