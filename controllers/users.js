import { v4 as uuidv4 } from "uuid";
uuidv4();
let users = [];

export const createUser = (req, res) => {
  const user = req.body;
  console.log(req.body);
  const userId = uuidv4();

  const userWithId = { ...users, id: userId };

  users.push(userWithId);

  res.send(
    `User with the name ${user.firstName} has been added to the database!`
  );
};

export const getUsers = (req, res) => {
  console.log(users);

  res.send("users");
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send("founderUser");
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with the ${id} was removed from the database`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);
  if (firstName) {
    user.firstName = firstName;
  } else if (lastName) {
    user.lastName = lastName;
  } else if (age) {
    user.age = age;
  }
  res.send(`User with the ${id} has been updated`);
};
