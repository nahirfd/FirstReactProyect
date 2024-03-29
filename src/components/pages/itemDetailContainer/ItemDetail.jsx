import ItemCount from "../../common/itemCount/ItemCount";
import ItemCountContainer from "../../common/itemCount/ItemCountContainer";
import { ProductCard } from "../../common/productCard/ProductCard";
import "./ItemDetailContainer.css";

const ItemDetail = ({ item }) => {
  return (
    <div className="detailContainerStyle">
      <h3>Detalle producto: </h3>
      <div className="detailImg">
        <img src={item.img} alt="imagen yerba" />
      </div>
      <h4>{item.title}</h4>
      <h3>{item.description}</h3>
      <h3>{item.price}</h3>
      <ItemCountContainer stock={5} />
    </div>
  );
};

export default ItemDetail;
