import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./partials/Loading";
import Cards from "./partials/Cards";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Sidenav from "./partials/Sidenav";

const Medicine = () => {
    document.title = "Medico | Medicine ";
    const navigate = useNavigate();
    const [category, setCategory] = useState("capsule");
    const [medicine, setmedicine] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isOpen, setIsOpen] = useState(false); // State to track sidenav visibility
    const  [loadmed, setloadmed]= useState("Duzela 20 Capsule DR")
    const  [category1, setcategory1]= useState("injection")
    const toggleSideNav = () => {
        setIsOpen(!isOpen);
    };
    const openSideNav = () => {
        setIsOpen(!isOpen);
    };
    const GetranMedicine = async () => {
        try {
            console.log(loadmed)
            const { data } = await axios.post(`/getrandomdata`, {
                query: category,size:20
            });
            console.log("th",data);
            if (data.length > 0) {
                setmedicine((preState) => [...preState, ...data]);
                setPage(page + 1);
                console.log("if",data);
            } else {
                setHasMore(false);
            } }
        catch (error) {
            console.log("Error: ", error);
        }
    };

    // const GetMedicine = async () => {
    //   try {
    //     console.log(loadmed)
    //     const { data } = await axios.post(`/search/pagesearch`, {
    //       query: loadmed
    //     });
    // console.log(data);
    //     if (data.length > 0) {
    //       setmedicine((preState) => [...preState, ...data]);
    //       setPage(page + 1);
    //     } else {
    //       setHasMore(false);
    //     }
    //   } catch (error) {
    //     console.log("Error: ", error);
    //   }
    // };

    const refreshHandler = () => {
        if (medicine.length === 0) {
            // GetMedicine();
            GetranMedicine();

        } else {
            setPage(1);
            setmedicine([]);
            // GetMedicine();
            GetranMedicine();
        }
    };
    console.log(medicine.length);
    useEffect(() => {
        refreshHandler();
        GetranMedicine();
    }, [category]);





    return medicine.length > 0 ? (
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
                            Medicine
                            <small className="ml-2 text-sm  text-zinc-600 px-2 py-[2px] rounded">
                                {category}
                            </small>
                        </h1>
                    </div>
                    <div className="flex">
                        <Topnav isOpen={isOpen} openSideNav={openSideNav} />
                        <Dropdown
                            title="Category"
                            options={["all", "capsule", "tablet", "injection"]}
                            func={(e) => setCategory(e.target.value)}
                        />
                    </div>
                </div>

                {/* InfiniteScroll with scrollableTarget */}
                <InfiniteScroll
                    dataLength={medicine.length}
                    next={GetranMedicine}
                    hasMore={hasMore}
                    loader={<h1>Loading...</h1>}
                    scrollableTarget="scrollableDiv"
                >
                    <Cards data={medicine} title="medicine" />
                </InfiniteScroll>
            </div>
        </div>
    ) : (
        <Loading />
    );
};

export default Medicine;
