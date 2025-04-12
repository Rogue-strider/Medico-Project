import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";

const Topnav = ({ openSideNav, isOpen }) => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className={`flex mx-auto  ${!isOpen ? "w-screen h-[10vh] relative flex items-center mx-auto" : "w-[80%] h-[10vh] relative flex items-center mx-auto"}`}>
      <i
        onClick={openSideNav}
        className={` ${
          !isOpen &&
          "isOpen && text-3xl text-[rgb(101,86,205)]  cursor-pointer ri-menu-line"
        }`}
      ></i>
      <div className={`${isOpen? "w-[100%] h-[10vh] relative flex items-center mx-auto":"w-[80%] h-[10vh] relative flex items-center mx-auto"}`}>
        <i className="text-zinc-400 text-3xl ri-search-line"></i>
        <input
          onChange={(e) => setquery(e.target.value)}
          value={query}
          className="w-[50%] mx-10 bg-transparent p-5 text-xl text-white outline-none border-none"
          type="text"
          placeholder="search anything"
        />
        {query.length > 0 && (
          <i
            onClick={() => setquery("")}
            className="text-zinc-400  text-3xl ri-close-fill"
          ></i>
        )}

        <div className="z-[100] absolute bg-zinc-200 w-[50%] max-h-[50vh] top-[100%] left-[5%] overflow-auto">
          {searches.map((s, i) => (
            <Link
              to={`/${s.media_type}/details/${s.id}`}
              key={i}
              className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100"
            >
              <img
                className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
                src={
                  // s.backdrop_path || s.profile_path
                  //   ? `https://image.tmdb.org/t/p/original/${
                  //       s.backdrop_path || s.profile_path
                  //     }`
                  //   :
                  noimage
                }
                alt=""
              />
              <span>
                {/* {s.name || s.title || s.original_name || s.original_title} */}
                Medicine
              </span>
            </Link>
          ))}
        </div>
        {/* <div className="ml-[20vw]  flex gap-[5vw]">
        <div>
          <Link to="/signup">SignUp</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Topnav;
