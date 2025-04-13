import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncloadmovie, removemovie } from "../Store/actions/movieActions";
import HorizontalCards from "./partials/HorizontalCards";
import Loading from "./partials/Loading";
import noimage from "/noimage.jpg";

const Medicinedetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [dispatch, id]);

  return info ? (
    <div
      // style={{
      //   background: info.detail.backdrop_path
      //     ? `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`
      //     : "none",
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      // }}
      className="relative w-screen bg-[#1f1e24] h-[120vh] px-[10%]"
    >
      {/*part1*/}
      <nav className="w-full h-[10vh] text-zinc-100 flex items-center justify-between gap-10 text-2xl">
        <div className="flex gap-10 items-center">
          <Link
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></Link>
          <a target="_blank" href={info.detail.homepage}>
            <i className="ri-external-link-fill"></i>
          </a>
          <a
            target="_blank"
            href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
          >
            <i className="ri-earth-fill"></i>
          </a>
          <a
            target="_blank"
            // href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
          >
            1mg
          </a>
        </div>
        <Link className="h-[2.5vw] w-[2.5vw] rounded-full flex items-center justify-center bg-[#e6b200]">
          <i className="ri-shopping-cart-fill"></i>
        </Link>
      </nav>
      {/*part2*/}
      <div className="w-full flex">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[50vh] object-cover"
          src={
              info.detail.img ?`/search/pagesearch${
              info.detail.img
            }`:
            noimage
          }
          alt=""
        />

        <div className="content ml-[5%] text-white">
          <h1 className="text-5xl font-black text-white ">
            {info.detail.tabletname}

            <small className="text-2xl font-bold text-zinc-200">
              {/* ({info.detail.release_date.split("-")[0]}) */}
            </small>
          </h1>

          <div className="mt-3 mb-5 flex text-white items-center gap-x-5">
            {/* <span className="text-xl font-semibold rounded-full bg-yellow-600 text-white w-[5vh] h-[5vh] flex justify-center items-center"> */}
            {/* {(info.detail.vote_average * 10).toFixed()} <sup>%</sup> */}
            {/* </span> */}
            <h1 className="font-semibold text-2xl w-[60px] leading-6">
              {/* User Score */}
            </h1>
            {/* <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.detail.runtime}min</h1> */}
          </div>

          <h1 className="text-xl font-semibold italic text-zinc-200">
            {/* {info.detail.tagline} */}Company Name
          </h1>

          <h1 className="text-2xl mt-5 mb-3  ">Overview</h1>
          <p>{/* {info.detail.overview} */} Overview of medicine</p>

          {/* <h1 className="text-2xl mt-5 mb-3  ">Movie Translated</h1> */}
          {/* <p className="mb-10">{info.translations.join(", ")}</p> */}
          {/* <Link
            className=" p-5 bg-[#6556CD] rounded-lg"
            to={`${pathname}/trailer`}
          > */}
          {/* <i className="text-xl ri-play-fill mr-3"></i> */}
          {/* Play Trailer */}
          {/* </Link> */}
        </div>
      </div>

      {/*Part3 Available on platform */}
      {/* <div className="w-[80%] flex flex-col gap-y-5 mt-10">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Platforms</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Rent</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available for Buy</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div> */}

      {/*part4 recommendation and similarity stuff */}
      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
      <h1 className=" text-3xl font-bold text-white ">
        Recommendation & Similar Stuff
      </h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default Medicinedetails;
