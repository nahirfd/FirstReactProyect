import { products } from "../../../productsMock";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});

  let id = 2;

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products[id - 1]);
      reject("error");
    });
    tarea
      .then((res) => {
        setDetail(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <ItemDetail detail={detail} />
    </>
  );
};

export default ItemDetailContainer;
