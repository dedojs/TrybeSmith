import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import Products from '../interfaces/products.interface';

async function createProducts(products: Products): Promise<Products> {
  const { name, amount } = products;
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: Products = { id, name, amount };
  return newProduct;
}

async function getAllProducts(): Promise<Products[]> {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [products] = await connection.execute(query);
  return products as Products[];
}

async function getByOrderId(orderId: number): Promise<Products[]> {
  const query = 'SELECT id FROM Trybesmith.Products WHERE orderId = ?';
  const values = [orderId];
  const [data] = await connection.execute(query, values);
  const product = data as Products[];
  return product;
}

export = {
  createProducts,
  getAllProducts,
  getByOrderId,
};
