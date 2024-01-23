import React from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData } from "./api";
import { useEffect } from "react";
import { useState } from "react";
const App = () => {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});
    const [type, setType] = useState("restaurants");
    const [rating, setRating] = useState(0);
    const [autocomplete, setAutocomplete] = useState(null);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                setCoordinates({ lat: latitude, lng: longitude });
            }
        );
    }, []); //builtin browser geolocation API
    useEffect(() => {
        const filteredPlaces = places.filter(
            (place) => Number(place.rating) > rating
        );

        setFilteredPlaces(filteredPlaces);
    }, [rating]);
    useEffect(() => {
        getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
            console.log(data);
            setPlaces(data);
        });
    }, [type, coordinates, bounds]);
    const onLoad = (autoC) => setAutocomplete(autoC);

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
    };
    return (
        <>
            <CssBaseline />
            <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
            <Grid container spacing={3} style={{ width: "100%" }}>
                <Grid item xs={12} md={4}>
                    <List
                        places={filteredPlaces.length ? filteredPlaces : places}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={filteredPlaces.length ? filteredPlaces : places}
                    />
                </Grid>
                <Grid item xs={12} md={8}></Grid>
            </Grid>
        </>
    );
};
export default App;
