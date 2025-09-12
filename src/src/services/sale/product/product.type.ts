"use client";

import { ICategory } from "../category/category.type";

export interface IProduct {
  id?: string;
  name?: string;
  sku?: string;
  storeId?: string;
  createdAt?: string;
  price: number;
  onlinePrice: number;
  thirdPartyPlatform?: string;
  variants?: any[];
  image?: string;
  statusId: number;
  category?: ICategory | null;
  categoryId?: string | null;
  images: {
    id: string;
    url: string;
  }[];
  hsCodeId: string;
  hsCode: string;
  width: number;
  height: number;
  length: number;
  weight: number;
  quantity: number;
  productOptions: Partial<IProductOption>[];
  descriptions: string;
  status: number;
  defaultModel: any;
  models: any[];
  remainedQuantity: number;
}

export interface IProductOption {
  id: string;
  variant: any;
  product: any;
  price: number;
  onlinePrice: number;
  status: number;
  createdAt: string;
  isDefault: boolean;
  description: string;
}
