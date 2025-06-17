export interface Product {
  name: string;
  model: string;
  imageUrl: string;
  price: number;
  type: string;
  year: number;
  top10: boolean;
  description: string;
  brand: Brand;
}

export type Brand = {
  connect: {
    id: number;
    name?: string;
  };
};
