import React, { useEffect, useState } from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from '../utils/axios.jsx';


const MedicinesDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [medicine, setMedicine] = useState(null); // Only need one medicine object

    const GetMedicine = async () => {
        try {
            console.log(id)
            const { data } = await axios.post(`/search/medicsearch`, {
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
                <p>Loading...</p>
            ) : (
                <div className="relative w-screen bg-[#1f1e24] h-[120vh] px-[10%]">
                    <h1 className="text-2xl font-bold mb-4">Medicine Details</h1>
                    <nav className="w-full h-[10vh] text-zinc-100 flex items-center justify-between gap-10 text-2xl">
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
                        <Link to="/carts" className="h-[2.5vw] w-[2.5vw] rounded-full flex items-center justify-center bg-[#e6b200]">
                            <i className="ri-shopping-cart-fill"></i>
                        </Link>
                    </nav>
                    <div className="w-full flex">
                        <img
                            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[50vh] object-cover"
                            src={
                                medicine.img?.substring(0, 66) +
                                '0' +
                                medicine.img?.substring(66, 72) +
                                '0' +
                                medicine.img?.substring(72)
                            }
                            alt={medicine.name || 'Medicine Image'}
                        />
                        <div className="content ml-[5%] text-white">
                            <h2 className="text-5xl font-black text-white ">{medicine.tabletname || medicine.capsulename}</h2>
                            <div className="mt-6 mb-3 text-xl">Marketer: {medicine.marketer}</div>
                            <p className="text-lg font-semibold"><strong>Price:</strong> ₹{medicine.price.toFixed(2)}</p>
                            <p className="text-lg mt-3 mb-4 font-semibold"><strong>Prescription:</strong> {medicine.prescription}</p>
                            <div className="text-3xl font-bold"> Composition : {medicine.composition}</div>

                            <div>
                                <h3 className="text-xl mt-2 mb-1 font-semibold "> Brief:</h3>
                                <p className="text-zinc-400 font-semibold">{medicine.data.brief}</p>
                            </div>

                            <div>
                                <h3 className="text-xl mt-2 mb-1 font-semibold "> Uses:</h3>
                                <p className="text-zinc-400 font-semibold">{medicine.data.uses}</p>
                            </div>

                            <div>
                                <h3 className="text-xl mt-2 mb-1 font-semibold "> Sideeffect:</h3>
                                <p className="text-zinc-400 font-semibold">{medicine.data.sideeffects.join(",")}</p>
                            </div>
                            <div>
                                <h3 className="text-xl mt-2 mb-1 font-semibold "> SideEffectBrief:</h3>
                                <p className="text-zinc-400 font-semibold">{medicine.data.sideeffectbrief}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MedicinesDetails;