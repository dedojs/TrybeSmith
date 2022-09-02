import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import Orders from '../interfaces/orders.interface';
import ProductModel from './products.model';

async function getAllOrders(): Promise<Orders[]> {
  const query = 'select * from Trybesmith.Orders';
  const [rows] = await connection.execute(query) as any;
  // console.log(rows);
  const orders = await Promise.all(rows.map(async (item: any) => {
    const ids = await ProductModel.getByOrderId(item.id);
    return { id: item.id, userId: item.userId, productsIds: ids.map(({ id }) => id) };
  }));
  return orders as Orders[];
}

async function createOrders(productIds: Orders, user: number): Promise<Orders> {
  const { productsIds } = productIds;
  const userid = user;
  const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
  const value = [userid];
  const [result] = await connection.execute<ResultSetHeader>(query, value);
  const { insertId: id } = result;
  const newOrder: Orders = { id, userid, productsIds };
  return newOrder;
}

export = {
  getAllOrders,
  createOrders,
};