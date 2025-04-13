import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";

const Topnav = ({ openSideNav, isOpen }) => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);
  const [medicine, setmedicine] = useState([]);
  const [category, setcategory] = useState("capsule");
  const [page, setPage] = useState(1);
  const GetSearches = async () => {
    try {
      const { data } = await axios.post(`/search/searchbarquery`, {
        query: query,
      });
      // console.log(data);
      setsearches(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const GetranMedicine = async () => {
    try {
      const { data } = await axios.post(`/getrandomdata`, {
        query: query,
        size: 20,
      });
console.log("gr",data)
      if (data.length > 0) {
        setmedicine((preState) => [...preState, ...data]);
        setPage(page + 1);
        // console.log("if", medicine);
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

  useEffect(() => {
    if (query.length > 0) {
      GetSearches();

    } else {
      setsearches([]);
    }
  }, [query]);
 console.log("te",searches)





  return (
    <div
      className={`flex mx-auto  ${
        !isOpen
          ? "w-screen h-[10vh] relative flex items-center mx-auto"
          : "w-[80%] h-[10vh] relative flex items-center mx-auto"
      }`}
    >
      <i
        onClick={openSideNav}
        className={` ${
          !isOpen &&
          "isOpen && text-3xl text-[rgb(101,86,205)]  cursor-pointer ri-menu-line"
        }`}
      ></i>
      <div
        className={`${
          isOpen
            ? "w-[100%] h-[10vh] relative flex items-center mx-auto"
            : "w-[80%] h-[10vh] relative flex items-center mx-auto"
        }`}
      >
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
                to={`/medicine/details/${typeof s === "string" ? s : s.name || s.tabletname || s.injectionname || s.capsulename}`}
                key={i}

              className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100"
            >
              {/*<img*/}
              {/*  className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"*/}
              {/*  src={*/}
              {/*    s.img*/}
              {/*  }*/}
              {/*  alt=""*/}
              {/*/>*/}
              <span>
                {s}

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
