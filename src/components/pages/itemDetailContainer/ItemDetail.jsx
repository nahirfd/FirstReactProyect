import { ProductCard } from "../../common/productCard/ProductCard";

const ItemDetail = ({ detail }) => {
  return (
    <div>
      <h3>Detalle: {detail.description}</h3>
    </div>
  );
};

export default ItemDetail;
