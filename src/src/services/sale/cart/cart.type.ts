"use client";

import { ICategory } from "../category/category.type";

export interface ICart{
  id?: string;
  name?: string;
  storeId?: string;
  price: number;
  onlinePrice: number;
  weight: number;

  descriptions: string;
  image?: string;
  remainedQuantity: number;
  quantity: number;
  hsCodeId: string;
  hsCode: string;
  model: IModel;
}
export interface ISessionCart {
  id?: string;
  expiredAt?: string;
}
export interface IModel {
  id?: string;
  name?: string;
  storeId?: string;
  price: number;
  onlinePrice: number;
  weight: number;
  isDefault: boolean
}
