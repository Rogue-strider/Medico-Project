// import axios from "../utils/axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Loading from "./partials/Loading";
// import Cards from "./partials/Cards";
// import Topnav from "./partials/Topnav";
// import Dropdown from "./partials/Dropdown";
// import InfiniteScroll from "react-infinite-scroll-component";

// const PersonalCare = () => {
//   document.title = "Medico | PersonalCare ";
//   const navigate = useNavigate();
//   const [category, setCategory] = useState("now_playing");
//   const [personalCare, setPersonalCare] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const GetPersonalCare = async () => {
//     try {
//       const { data } = await axios.get(`/movie/${category}?page=${page}`);

//       if (data.results.length > 0) {
//         setPersonalCare((preState) => [...preState, ...data.results]);
//         setPage(page + 1);
//       } else {
//         setHasMore(false);
//       }
//     } catch (error) {
//       console.log("Error: ", error);
//     }
//   };

//   const refreshHandler = () => {
//     if (personalCare.length === 0) {
//       GetPersonalCare();
//     } else {
//       setPage(1);
//       setPersonalCare([]);
//       GetPersonalCare();
//     }
//   };

//   useEffect(() => {
//     refreshHandler();
//   }, [category]);

//   return personalCare.length > 0 ? (
//     <div className=" w-screen h-screen ">
//       <div className="px-[5%] w-full  flex items-center justify-between">
//         <h1 className=" text-2xl font-semibold text-zinc-400">
//           <i
//             onClick={() => navigate(-1)}
//             className="hover:text-[#6556cd] ri-arrow-left-line"
//           ></i>{" "}
//           PersonalCare<small className="ml-2 text-sm text-zinc-600">category</small>
//         </h1>
//         <div className="flex items-center w-[80%] ">
//           <Topnav />
//           <Dropdown
//             title="Category"
//             options={["recommended", "top_rated", "C", "D"]}
//             func={(e) => setCategory(e.target.value)}
//           />
//           <div className="w-[2%] "></div>
//         </div>
//       </div>

//       <InfiniteScroll
//         dataLength={personalCare.length}
//         next={GetPersonalCare}
//         hasMore={hasMore}
//         loader={<h1>Loading...</h1>}
//       >
//         <Cards data={personalCare} title="personalCare" />
//       </InfiniteScroll>
//     </div>
//   ) : (
//     <Loading />
//   );
// };

// export default PersonalCare;

import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./partials/Loading";
import Cards from "./partials/Cards";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Sidenav from "./partials/Sidenav";

const PersonalCare = () => {
  document.title = "Medico | PersonalCare ";
  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
  const [personalCare, setPersonalCare] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isOpen, setIsOpen] = useState(false); // State to track sidenav visibility

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };
  const openSideNav = () => {
    setIsOpen(!isOpen);
  };

  const GetpersonalCare = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);

      if (data.results.length > 0) {
        setPersonalCare((preState) => [...preState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = () => {
    if (personalCare.length === 0) {
      GetpersonalCare();
    } else {
      setPage(1);
      setPersonalCare([]);
      GetpersonalCare();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return personalCare.length > 0 ? (
    <div className="flex h-screen overflow-x-hidden bg-[#1f1e24]">
      <Sidenav
        isOpen={isOpen}
        toggleSideNav={toggleSideNav}
        openSideNav={openSideNav}
      />

      {/* This is the scrollable container */}
      <div
        id="scrollableDiv"
        className={`transition-all duration-300 h-screen overflow-auto ${
          isOpen ? "w-[80%]" : "w-full"
        }`}
      >
        <div className="px-[5%] py-4 w-full">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold text-zinc-400 flex items-center gap-2">
              <i
                onClick={() => navigate(-1)}
                className="hover:text-[#6556cd] ri-arrow-left-line cursor-pointer"
              ></i>
              PersonalCare
              <small className="ml-2 text-sm bg-red-400 text-zinc-600 px-2 py-[2px] rounded">
                category
              </small>
            </h1>
          </div>
          <div className="flex  ">
            <Topnav isOpen={isOpen} openSideNav={openSideNav} />
            <Dropdown
              title="Category"
              options={["popular", "top_rated", "c", "d"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>

        {/* InfiniteScroll with scrollableTarget */}
        <InfiniteScroll
          dataLength={personalCare.length}
          next={GetpersonalCare}
          hasMore={hasMore}
          loader={<h1>Loading...</h1>}
          scrollableTarget="scrollableDiv"
        >
          <Cards data={personalCare} title="personalCare" />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default PersonalCare;
