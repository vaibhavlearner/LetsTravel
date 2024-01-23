import axios from "axios";
// const url =
//     "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
// const options = {
//     method: "GET",
//
//     params: {
//         bl_latitude: "11.847676",
//         tr_latitude: "12.838442",
//         bl_longitude: "109.095887",
//         tr_longitude: "109.149359",
//     },
//     headers: {
//         "X-RapidAPI-Key": "dcfbffbef1msh4fd6043d7f271fcp111b38jsn24ce935fdeb7",
//         "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
//     },
// };

export const getPlacesData = async (type, sw, ne) => {
    try {
        const {
            data: { data },
        } = await axios.get(
            `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
            {
                params: {
                    bl_latitude: sw.lat,
                    tr_latitude: ne.lat,
                    bl_longitude: sw.lng,
                    tr_longitude: ne.lng,
                },
                headers: {
                    "X-RapidAPI-Key": "", //your key in doubke qoutes
                    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
                },
            }
        );
        return data;
    } catch (error) {
        console.error(error);
    }
};
