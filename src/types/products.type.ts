export type TCategory = {
  _id: string;
  name: string;
  description: string;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type TProduct = {
  _id: string;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  category: TCategory;
  images: string;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
