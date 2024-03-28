import { ParamsDictionary } from 'express-serve-static-core';

export type ParamProductId = {
  productId: string;
} | ParamsDictionary;