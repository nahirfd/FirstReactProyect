import React from "react";
import "./ProductCard.css";
import { Grid } from "@mui/material";
import ItemCountContainer from "../itemCount/ItemCountContainer";

export const ProductCard = ({ img, title, description, price }) => {
  return (
    <div className="cardsFigure">
      <img src={img} alt="" />
      <h4>{title}</h4>
      <h3>{description}</h3>
      <h3>{price}</h3>
      <button>Detalle</button>
      {/* <ItemCountContainer stock={5} /> */}
    </div>
  );
};
