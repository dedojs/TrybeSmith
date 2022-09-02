// import Orders from '../interfaces/orders.interface';
import ordersModel from '../models/orders.model';
import Orders from '../interfaces/orders.interface';

async function getAllOrders() {
  const data = await ordersModel.getAllOrders();
  return { status: 200, data };
}

async function createOrders(productIds: Orders, user: number) {
  const data = await ordersModel.createOrders(productIds, user);
  return { status: 201, data };
}

export = {
  getAllOrders,
  createOrders,
};
