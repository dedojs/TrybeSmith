import express from 'express';
// import swaggerUi from 'swagger-ui-express';
// import swaggerFile from '../swagger_output.js';
import productsController from './controllers/products.controller';
import usersController from './controllers/users.controller';
import ordersController from './controllers/orders.controller';
import midd from './utils/middwares';

const app = express();

app.use(express.json());
// app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.post('/products', midd.verifyName, midd.verifyAmount, productsController.createProducts);

app.get('/products', productsController.getAllProducts);

app.post(
  '/users',
  midd.verifyUserName,
  midd.verifyUserClass,
  midd.verifyUserlevel,
  midd.verifyUserPassword,
  usersController.createUser,
);

app.post('/login', usersController.login);

app.get('/orders', ordersController.getAllOrders);

export default app;
