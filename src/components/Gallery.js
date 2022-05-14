import React from "react";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import classes from "./Gallery.module.css";

const Gallery = (props) => {
  return (
    <div className={classes.gal}>
      <ImageList variant="masonry" cols={3} gap={20}>
        {
        props.photos.map((img, idx) => (
          <ImageListItem className={classes.imgL} key={idx}>
            <img src={img.urls.regular} alt={img.alt_description} />
            <ImageListItemBar title={img.user.name} subtitle={"@"+img.user.instagram_username} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Gallery;
