import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./partials/Loading";
import Cards from "./partials/Cards";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";

const HealthGuide = () => {
  document.title = "Medico | HealthGuide ";
  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
  const [guide, setguide] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const Getguide = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);

      if (data.results.length > 0) {
        setguide((preState) => [...preState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = () => {
    if (guide.length === 0) {
      Getguide();
    } else {
      setPage(1);
      setguide([]);
      Getguide();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return guide.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="px-[5%] w-full  flex items-center justify-between">
        <h1 className=" text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>{" "}
          HealthGuide<small className="ml-2 text-sm text-zinc-600">category</small>
        </h1>
        <div className="flex items-center w-[80%] ">
          <Topnav />
          <Dropdown
            title="Category"
            options={["recommended", "top_rated", "C", "D"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%] "></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={guide.length}
        next={Getguide}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={guide} title="guide" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default HealthGuide;
