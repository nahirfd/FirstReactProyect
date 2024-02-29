export let products = [
  {
    id: 1,
    tittle: "Yerba mentolada",
    price: 4500,
    img: "https://res.cloudinary.com/duot4lnck/image/upload/v1708092881/b02zinzcbcxgsiybyuty.jpg",
    description: "yerba saborizada con Menta y Poleo",
    stock: 3,
    category: "animica ",
  },
  {
    id: 2,
    tittle: "Yerba paz y amor",
    price: 5500,
    img: "https://res.cloudinary.com/duot4lnck/image/upload/v1708092900/llrj1njfeo9ctemjcbjo.jpg",
    description: "yerba saborizada con Manzanilla y Rosa Mosqueta",
    stock: 3,
    category: "animica ",
  },
  {
    id: 3,
    tittle: "Yerba Citric",
    price: 4000,
    img: "https://res.cloudinary.com/duot4lnck/image/upload/v1708092937/oodk8yklr5pwerljo3ox.jpg",
    description: "yerba saborizada con frutos citricos",
    stock: 3,
    category: "estomacal",
  },
  {
    id: 4,
    tittle: "Yerba valentine",
    price: 5000,
    img: "https://res.cloudinary.com/duot4lnck/image/upload/v1708092950/ejwwndtihlugxfl7jp6w.jpg",
    description: "yerba saborizada con Frutos Rojos",
    stock: 3,
    category: "estomacal",
  },
  {
    id: 5,
    tittle: "Yerba de la abuela",
    price: 4000,
    img: "https://res.cloudinary.com/duot4lnck/image/upload/v1708092963/uyupzuoatbqz65vsrx09.jpg",
    description: "yerba saborizada con Burrito y peperina",
    stock: 3,
    category: "animica ",
  },
  {
    id: 6,
    tittle: "Yerba dulce",
    price: 4500,
    img: "https://res.cloudinary.com/duot4lnck/image/upload/v1708092979/gr4qeapoqztpxvukeh8d.jpg",
    description: "yerba saborizada con Stevia natural ",
    stock: 3,
    category: "animica ",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id)
      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con el id ${id}`);
        }
      }, 2000);
    } else {
      reject("error");
    }
  });
};

