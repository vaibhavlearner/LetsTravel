import React from "react";

import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

import Rating from "@material-ui/lab";

import useStyle from "./style";
const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
    const classes = useStyle();
    const isDesktop = useMediaQuery("(min-width:600px)");

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyCWJsqWnltHwGcBb-St-0MqSBS9yv5MSUw",
                }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw }); //ye done console log krke pta chla
                }}
                onChildClick={""}
            >
                {places?.map((place, i) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {!isDesktop ? (
                            <LocationOnOutlinedIcon
                                color="primary"
                                fontSize="large"
                            />
                        ) : (
                            <Paper className={classes.paper} elevation={3}>
                                <Typography
                                    className={classes.typography}
                                    variant="subtitle2"
                                    gutterBottom
                                >
                                    {place.name}
                                </Typography>
                                <img
                                    className={classes.pointer}
                                    src={
                                        place.photo
                                            ? place.photo.images.large.url
                                            : "https://img.freepik.com/premium-vector/bakery-design_24877-44844.jpg?w=740"
                                    }
                                    alt={place.names}
                                />
                            </Paper>
                        )}
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
};

export default Map;
