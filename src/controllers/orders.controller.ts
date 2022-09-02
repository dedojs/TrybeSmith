import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
// import Products from '../interfaces/products.interface';

async function getAllOrders(_req: Request, res: Response) {
  const { status, data } = await ordersService.getAllOrders();
  res.status(status).json(data);
}

/*
async function createOrders(req: Request, res: Response, next: NextFunction) {
  try {
    const user = req.user
  } catch (error) {
    next(error);
  }
};
*/
export = {
  getAllOrders,
  // createOrders,
};
