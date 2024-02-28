import { ProductCard } from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map(({ id, img, title, description, price }) => {
        return (
          <div>
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
