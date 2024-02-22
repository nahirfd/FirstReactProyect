/* import { ProductCard } from "../../common/ProductCard/ProductCard"; */
import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
      reject("error");
    });
    tarea
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;

{
  /* <h2> TODOS LOS PRODUCTOS </h2>
<ProductCard titulo={"yerba 1 "} desc={"menta y poleo"} precio={3500} />
<ProductCard titulo={"yerba 2 "} desc={"citric"} precio={4000} />
<ProductCard titulo={"yerba 3 "} desc={"frutos rojos"} precio={3000} /> */
}
