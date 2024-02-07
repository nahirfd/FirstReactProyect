import { ProductCard } from "../common/ProductCard"


export const ItemListContainer = () => {
    return (
        <div>
            <h2> TODOS LOS PRODUCTOS </h2>
            <ProductCard titulo={ "yerba 1 "} desc={ "menta y poleo"} precio={ 3500 } />
            <ProductCard titulo={ "yerba 2 "} desc={ "citric" } precio={ 4000 } />
            <ProductCard titulo={ "yerba 3 "} desc={ "frutos rojos"} precio={ 3000 } />
        </div>
    )
}
