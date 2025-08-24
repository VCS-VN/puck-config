"use client";

import { MERCHANT_STATUS } from "@/utils/enums";
import { ICategory } from "../category/category.type";
import { IVariant } from "../variant/variant.type";

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
  statusId: MERCHANT_STATUS;
  category?: ICategory | null;
  categoryId?: string | null;
  images: {
    id: string;
    url: string;
  }[];
  hsCodeId: string;
  width: number;
  height: number;
  length: number;
  weight: number;
  quantity: number;
  productOptions: Partial<IProductOption>[];
  descriptions: string;
  status: MERCHANT_STATUS;
  defaultModel: any;
}

export interface IProductOption {
  id: string;
  variant: Partial<IVariant>;
  product: Partial<IProduct>;
  price: number;
  onlinePrice: number;
  status: MERCHANT_STATUS;
  createdAt: string;
  isDefault: boolean;
  description: string;
}
