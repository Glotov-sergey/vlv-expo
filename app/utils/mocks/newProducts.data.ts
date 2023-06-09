export interface INewProduct {
  id: string;
  imageUrl: string;
  brand: string;
  title: string;
  price: number;
}

export const newProductsData: INewProduct[] = [
  {
    id: "1",
    imageUrl: require("../../static/new-product.png"),
    brand: "Product Brand",
    title: "Product Title",
    price: 3990,
  },
  {
    id: "2",
    imageUrl: require("../../static/new-product.png"),
    brand: "Product Brand",
    title: "Product Title",
    price: 3990,
  },
  {
    id: "3",
    imageUrl: require("../../static/new-product.png"),
    brand: "Product Brand",
    title: "Product Title",
    price: 3990,
  },
  {
    id: "4",
    imageUrl: require("../../static/new-product.png"),
    brand: "Product Brand",
    title: "Product Title",
    price: 3990,
  },
];
