import React from "react";
import "./ProductCard.css";
import { Grid } from "@mui/material";

export const ProductCard = ({ img, title, description, price }) => {
  return (
    <div className="cards">
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <img src={img} alt="" />
          <h4>{title}</h4>
          <h3>{description}</h3>
          <h3>{price}</h3>
        </Grid>
      </Grid>
    </div>
  );
};
/* style={{ border: "2px solid black" }} */
