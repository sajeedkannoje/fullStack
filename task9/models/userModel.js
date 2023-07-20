const users = [];

const addUser = (name, email) => {
  users.push({ name, email });
};

const getUsers = () => {
  return users;
};

module.exports = { addUser, getUsers };
