
// import { Link } from "react-router-dom";

// const Header = ({ data }) => {
//   if (!data) {
//     return null; // Or render a loading state / error message
//   }
//   return (
//     <div
//       style={{
//         background:
//           data.backdrop_path || data.profile_path
//             ? `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
//                 data.backdrop_path || data.profile_path
//               })`
//             : "none",
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//       }}
//       className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%]"
//     >
//       <h1 className="w-[70%] text-5xl font-black text-white">
//         {/* {data.name || data.title || data.original_name || data.original_title} */} kuch name
//       </h1>
//       <p className="w-[70%] mt-3 mb-3 text-white ">
//         {/* {data.overview.slice(0, 200)}... */} kuch description
//         <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">more</Link>
//       </p>
//       <p className="text-white">
//         <i className="text-yellow-500 ri-megaphone-fill"></i>
//         {/* {data.release_date || "No Information"} */} //yaha pe kuch date likh skte h
//         <i className="ml-5 text-yellow-500 ri-album-fill"></i>{" "}
//         {/* {data.media_type.toUpperCase()} */}  // yaha medicine ki company ka name 
//       </p>
//       <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="mt-5 p-4 bg-[#6556CD] rounded text-white">Go Online</Link>
//     </div>
//   );
// };

// export default Header;


import React from 'react';

const Header = () => {
  return (
    <div className="w-full h-[20vh] relative overflow-hidden mb-[8vw] ml-[3vw]">
      <div
        className="w-full h-full bg-[url('https://via.placeholder.com/1920x1080?text=Medical+Background')] bg-cover bg-center"
        style={{
          backgroundColor: '#1f1e24',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-[#1f1e24]/90 to-[#1f1e24]/70 flex justify-start items-end p-5">
          <div className="z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold uppercase text-[#656acd] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] mb-2">
              MEDICO
            </h1>
            <p className="text-xl md:text-2xl font-medium text-[#656acd] drop-shadow-[1px_1px_3px_rgba(0,0,0,0.3)]">
              Your Trusted Medicine Information Hub
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;