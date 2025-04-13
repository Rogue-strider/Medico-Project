// src/Store/actions/medicineActions.js
export { removemedicine } from "../reducers/medicineSlice";
import axios from "../../utils/axios";
import { loadmedicine } from "../reducers/medicineSlice";

export const asyncloadmedicine = (id) => async (dispatch) => {
    try {
        const detail = await axios.post(`/search/pagesearch`, { id });
        const recommendations = await axios.post(`/search/pagesearch`, { query: "similar", id });
        const similar = await axios.post(`/search/pagesearch`, { query: "similar", id });

        let theultimatedetails = {
            detail: detail.data,
            externalid: externalid.data,
            recommendations: detail.data.recommendations || [],
            similar: detail.data.similar || [],
        };

        dispatch(loadmedicine(theultimatedetails));
    } catch (error) {
        console.error("Error fetching medicine details:", error);
    }
};