import { Request, Response, NextFunction } from 'express';

const verifyName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  // console.log('midd', name);
  if (!name) {
    const message = '"name" is required';
    res.status(400).json({ message });
  }
  if (typeof name !== 'string') {
    const message = '"name" must be a string';
    res.status(422).json({ message });
  }
  if (name.length < 2) {
    const message = '"name" length must be at least 3 characters long';
    res.status(422).json({ message });
  }
  next();
  return name;
};

const verifyAmount = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  if (!amount) {
    const message = '"amount" is required';
    res.status(400).json({ message });
  }
  if (typeof amount !== 'string') {
    const message = '"amount" must be a string';
    res.status(422).json({ message });
  }
  if (amount.length < 2) {
    const message = '"amount" length must be at least 3 characters long';
    res.status(422).json({ message });
  }
  next();
  return amount;
};

const verifyUserName = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  if (!username) {
    const message = '"username" is required';
    res.status(400).json({ message });
  }
  if (typeof username !== 'string') {
    const message = '"username" must be a string';
    res.status(422).json({ message });
  }
  if (username.length <= 2) {
    const message = '"username" length must be at least 3 characters long';
    res.status(422).json({ message });
  }
  next();
  return username;
};

const verifyUserClass = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;
  if (!classe) {
    const message = '"classe" is required';
    res.status(400).json({ message });
  }
  if (typeof classe !== 'string') {
    const message = '"classe" must be a string';
    res.status(422).json({ message });
  }
  if (classe.length <= 2) {
    const message = '"classe" length must be at least 3 characters long';
    res.status(422).json({ message });
  }
  next();
  return classe;
};

const verifyUserlevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  if (level <= 0) {
    const message = '"level" must be greater than or equal to 1';
    res.status(422).json({ message });
  }
  if (!level) {
    const message = '"level" is required';
    res.status(400).json({ message });
  }
  if (typeof level !== 'number') {
    const message = '"level" must be a number';
    res.status(422).json({ message });
  }
  next();
  return level;
};

const verifyUserPassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) {
    const message = '"password" is required';
    res.status(400).json({ message });
  }
  if (typeof password !== 'string') {
    const message = '"password" must be a string';
    res.status(422).json({ message });
  }
  if (password.length <= 7) {
    const message = '"password" length must be at least 8 characters long';
    res.status(422).json({ message });
  }
  next();
  return password;
};

export = {
  verifyName,
  verifyAmount,
  verifyUserName,
  verifyUserClass,
  verifyUserlevel,
  verifyUserPassword,
};