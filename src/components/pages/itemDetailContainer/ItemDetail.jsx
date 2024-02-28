import ItemCount from "../../common/itemCount/ItemCount";
import ItemCountContainer from "../../common/itemCount/ItemCountContainer";
import { ProductCard } from "../../common/productCard/ProductCard";
import "./ItemDetailContainer.css";

const ItemDetail = ({ detail }) => {
  return (
    <div className="detailContainerStyle">
      <h3>Detalle producto: </h3>
      <div className="detailImg">
        <img src={detail.img} alt="" />
      </div>
      <h4>{detail.title}</h4>
      <h3>{detail.description}</h3>
      <h3>{detail.price}</h3>
      <ItemCountContainer stock={5} />
    </div>
  );
};

export default ItemDetail;
