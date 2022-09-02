import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import Users from '../interfaces/users.interface';
import Login from '../interfaces/login.interface';

async function createUser(users: Users): Promise<Users> {
  const { username, classe, level, password } = users;
  const query = `INSERT INTO Trybesmith.Users
    (username, classe, level, password) VALUES (?, ?, ?, ?)`;
  const values = [username, classe, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newUser: Users = { id, username, classe, level, password };

  return newUser;
}

async function login(username: string): Promise<Login[]> {
  const query = `SELECT username, password FROM Trybesmith.Users
  WHERE username = ?`;
  const value = [username];
  const [data] = await connection.execute(query, value);
  // console.log(data);
  const user = data as Login[];
  return user;
}

export = {
  createUser,
  login,
};