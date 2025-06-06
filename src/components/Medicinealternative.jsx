import React, { useEffect, useState } from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from '../utils/axios.jsx';
import Grid from "./partials/gridsearch.jsx";
import base64url from "base64url";
import TopMedicine from "./topmedic.jsx";

const Medicinealternative = () => {
    let{ id } = useParams();
    id = base64url.decode(id);

    const navigate = useNavigate();
    const [medicine, setMedicine] = useState(null); // Only need one medicine object
console.log("reach");
    const GetMedicine = async () => {
        try {
            console.log(id)
            const { data } = await axios.post(`/search/pagesearch`, {
                query: id
            })

console.log(data)
            if (data ) {
                setMedicine(data);
            } else {
                console.log('No data found');
            }
        } catch (err) {
            console.log('Fetch error:', err);
        }
    };

    useEffect(() => {
        GetMedicine();
    }, []);

    return (
        <div className="p-4 text-white">


            {!medicine ? (
                <div   style={{height:"100dvh",width:"100vw",backgroundColor: "black",zIndex:108 ,position:"absolute"}}>
                    <img src="/Preloader IV.gif" style={{position:"absolute" ,zIndex:110 ,height:"50dvh",width:"50vw",  top: "50%",
                        left: "50%",
                        transform:"translate(-50%, -50%)"}}/> </div>
                    ) : (
                    <div className="relative w-screen bg-[#161616] h-[120vh] px-[10%]">
                        <h1 className="text-2xl font-bold mb-4">Medicine Details</h1>
                        <nav
                            className="w-full h-[10vh] text-zinc-100 flex items-center justify-between gap-10 text-2xl">
                            <div>
                                <Link
                                    onClick={() => navigate(-1)}
                                    className="hover:text-[#6556cd] ri-arrow-left-line"
                                ></Link>
                                <a
                                    target="_blank"
                                    // href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
                                >
                                    Back
                                </a>
                            </div>
                            <Link to="/carts"
                                  className="h-[2.5vw] w-[2.5vw] rounded-full flex items-center justify-center bg-[#e6b200]">
                                <i className="ri-shopping-cart-fill"></i>
                            </Link>
                        </nav>
                        <TopMedicine id={id}></TopMedicine>
                        {medicine.map((medic, index) => (
                            <Link to={'/medicine/details/' + base64url.encode(medic.tabletname || medic.capsulename)} key={index}>
                                <Grid medicine={medic}></Grid>
                            </Link>
                        ))}

                    </div>
                    )}
                </div>
            );
            };

            export default Medicinealternative;