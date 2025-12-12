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

export type User = {
  id: string | number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
};
export type UserResponse = {
  users: User[] ;
};
