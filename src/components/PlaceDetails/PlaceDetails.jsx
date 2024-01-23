import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import useStyle from "./style";
import {
    Box,
    Typography,
    Button,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Chip,
} from "@material-ui/core";
const PlaceDetails = ({ place }) => {
    const classes = useStyle();
    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: 350 }}
                image={
                    place.photo
                        ? place.photo.images.large.url
                        : "https://as2.ftcdn.net/v2/jpg/02/66/42/43/1000_F_266424390_0esteIkQLIZrIBPQT8qOgZ34pGSxoT1f.jpg"
                }
            />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {place.name}
                </Typography>
                <Box display="flex" justifyContent="space-between" my={2}>
                    <Rating
                        name="read-only"
                        value={Number(place.rating)}
                        readOnly
                    />
                    <Typography component="legend">
                        {place.num_reviews} review{place.num_reviews > 1 && "s"}
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography component="legend">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">
                        {place.price_level}
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography component="legend">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">
                        {place.ranking}
                    </Typography>
                </Box>
                {place.address && (
                    <Typography
                        gutterBottom
                        variant="body2"
                        color="textSecondary"
                        className={classes.subtitle}
                    >
                        <LocationOnIcon />
                        {place.address}
                    </Typography>
                )}
                {place.phone && (
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        className={classes.spacing}
                    >
                        <PhoneIcon /> {place.phone}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};
export default PlaceDetails;
