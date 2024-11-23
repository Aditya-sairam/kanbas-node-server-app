import db from "../Database/index.js";
let users = db.users;

export const createUser = (user) => (users = [...users, { ...user, _id: Date.now() }]);

export const findAllUsers =() => {
    return users;
}

export const findUserById = (userId) => users.find((user) => user.id === userId);
export const findByUsername = (userName) => users.find((user) => user.username === userName);
export const findUserByCredentials = (username, password) =>
    users.find( (user) => user.username === username && user.password === password );
export const updateUser = (userId, user) => (users = users.map((u) => (u._id === userId ? user : u)));


  export const deleteUser = (userId) => (users = users.filter((u) => u._id !== userId));
  