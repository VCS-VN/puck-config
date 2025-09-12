import { IProduct } from "../product/product.type";

export interface ICategory {
  id: string;
  name: string;
  storeId: string;
  products: IProduct[];
  sortIndex: number;
  description: string;
}
