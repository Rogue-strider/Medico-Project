import React, {useEffect, useState} from "react";
import axios from "../utils/axios.jsx";
import Grid from "./partials/gridsearch.jsx";
import base64url from "base64url";
import {Link} from "react-router-dom";
const TopMedicine=({id})=>{
    const [medicine, setMedicine] = useState(null);
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
    return !medicine ? null :(
        <Link to={'/medicine/details/' + base64url.encode(medicine.tabletname || medicine.capsulename)} key={medicine.tabletname || medicine.capsulename}>

        <div
        className=" flex overflow-x-auto min-w-[45%] sm:min-w-[58%] md:min-w-[40%] lg:min-w-[58.5%] mr-3 sm:mr-4 md:mr-8 bg-[#1c1c1c] bg-[url('/public/file.svg')] bg-contain bg-repeat bg-center mb-5 h-[70vh] sm:h-[40vh] md:h-[50vh] w-full max-w-xl mx-auto rounded-2xl inline-block">
        <img
            className=" p-2 min-w-[45%] sm:min-w-[30%] md:min-w-[20%] lg:min-w-[100%]  h-[70%] object-contain"
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
            <h2 className="text-sm sm:text-md md:text-lg font-semibold truncate">{medicine.tabletname || medicine.capsulename}</h2>
            <p className="text-zinc-500">
                <strong>Price:</strong> ₹{medicine.price ? medicine.price.toFixed(2) : "unknown"}</p>
            <div className="   text-sm">Marketer: {medicine.marketer}</div>

        </div>
    </div>
        </Link>
   )
}
export  default TopMedicine;