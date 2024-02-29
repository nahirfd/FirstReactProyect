import { ProductCard } from "../../common/productCard/ProductCard";
import "./ItemListContainer.css";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map(({ id, img, title, description, price }) => {
        return (
          <div className="cards">
            <ProductCard
              key={id}
              img={img}
              title={title}
              description={description}
              price={price}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
