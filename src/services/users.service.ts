import Users from '../interfaces/users.interface';
import usersModel from '../models/users.model';
// import Login from '../interfaces/login.interface';

async function createUser(users: Users) {
  const data = await usersModel.createUser(users);
  return { status: 201, data };
}

async function login(username: string, password: string) {
  const data = await usersModel.login(username);
  //  console.log('service login', data[0].password, 'pass', password);

  if (!password) {
    const message = '"password" is required';
    return { status: 400, message };
  } 

  if (data.length === 0 || data[0].password !== password) {
    const message = 'Username or password invalid';
    return { status: 401, message };
  }
  return { status: 200, data };
}

export = {
  createUser,
  login,
};