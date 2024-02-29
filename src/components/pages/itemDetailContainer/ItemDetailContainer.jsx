import {useParams} from "react-router-dom"
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getProduct } from "../../../asyncMock";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    getProduct(id)
    .then(resp => setItem(resp));
  }, []);

  return (
    <>
      {item && <ItemDetail  {...item}/>}
    </>
  );
};


export default ItemDetailContainer;
