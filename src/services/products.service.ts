import Products from '../interfaces/products.interface';
import productsModel from '../models/products.model';

async function createProducts(products: Products) {
  const data = await productsModel.createProducts(products);
  return { status: 201, data };
}

async function getAllProducts() {
  const data = await productsModel.getAllProducts();
  return { status: 200, data };
}

export = {
  createProducts,
  getAllProducts,
};