import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Header from "./partials/Header";
import { useEffect, useState } from "react";
import axios from "../utils/axios";

import HorizontalCards from "./partials/HorizontalCards";
import Loading from "./Loading";
import Footer from "./Footer";
const Home = () => {
  document.title = "Medico | Home Page";
  // const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");
  const [isOpen, setIsOpen] = useState(false); // State to track sidenav visibility

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };
  const openSideNav = () => {
    setIsOpen(!isOpen);
  };
  const GetHeadWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const getTrending = async () => {
    try {
      const { data } = await axios.post(`/getrandomdata`,{
        query: category,
      });
      settrending(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  // const getTrending = async () => {
  //   try {
  //     const { data } = await axios.get(`/trending/${category}/day`);
  //     settrending(data.results);
  //   } catch (error) {
  //     console.log("Error: ", error);
  //   }
  // };
  useEffect(() => {
    getTrending();
    // !wallpaper && GetHeadWallpaper();
  }, [category]);

  return  (
    <>
      <Sidenav
        isOpen={isOpen}
        toggleSideNav={toggleSideNav}
        openSideNav={openSideNav}
      />
      <div className={`transition-all h-full px-5 overflow-auto  overflow-x-hidden duration-300 ${isOpen ? " w-[80%]" : "w-[200vw] bg-[#1f1e24]"}`}>
        <Topnav isOpen={isOpen} openSideNav={openSideNav} />
        <Header />
         <div className=" flex justify-between p-5">
          <h1 className="text-3xl font-semibold text-zinc-400">Capsules</h1>
          {/*<Dropdown*/}
          {/*  title="Filter"*/}
          {/*  options={["capsule", "injection", "tablet"]}*/}
          {/*  func={(e) => setcategory(e.target.value)}*/}
          {/*/>*/}
        </div>
        <HorizontalCards datax="capsule" />
        <h1 className="text-3xl font-semibold text-zinc-400">Injections</h1>
        <HorizontalCards datax="injection" />
        <h1 className="text-3xl font-semibold text-zinc-400">Tablets</h1>
        <HorizontalCards  datax="tablet"/>
        <Footer/>

      </div>
    </>
  ) 
};

export default Home;
