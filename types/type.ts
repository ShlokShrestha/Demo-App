export type PostApiParams<T> = {
  url: string;
  formData: T;
};

export type Product = {
  id: string | number;
  title: string;
  price: string;
  thumbnail: string;
};

export type ProductsResponse = {
  products: Product[];
};
