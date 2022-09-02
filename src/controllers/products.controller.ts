import { Request, Response, NextFunction } from 'express';
import productsService from '../services/products.service';
import Products from '../interfaces/products.interface';

async function createProducts(req: Request, res: Response, next: NextFunction) {
  try {
    const product = req.body as Products;
    // console.log('contr', product);
    const { status, data } = await productsService.createProducts(product);
    return res.status(status).json(data);
  } catch (error) {
    next(error);
  }
}

async function getAllProducts(_req: Request, res: Response) {
  const { status, data } = await productsService.getAllProducts();
  res.status(status).json(data);
}

export = {
  createProducts,
  getAllProducts,
};