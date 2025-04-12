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
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    getTrending();
    // !wallpaper && GetHeadWallpaper();
  }, [category]);

  return trending ? (
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
          <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>
          <Dropdown
            title="Filter"
            options={["capsule", "injection", "medicine"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
        <HorizontalCards data={trending} />
        <Footer/>
      </div>
    </>
  ) : (
    <h1>
      <Loading />
    </h1>
  );
};

export default Home;
