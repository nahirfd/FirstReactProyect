const ItemCount = ({ counter, addOne, subOne }) => {
  return (
    <>
      <button onClick={addOne}>Sumar</button>
      <h4>{counter}</h4>
      <button onClick={subOne} disabled={counter===1 ? true : false} >Restar</button>
      <button>Agregar al carrito</button>
    </>
  );
};

export default ItemCount;
