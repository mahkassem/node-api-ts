export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

const users: Array<User> = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@test.com',
    password: '123456',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane.doe@test.com',
    password: 'secret',
  },
  {
    id: 3,
    name: 'Jack Doe',
    email: 'jack.doe@test.com',
    password: 'password',
  },
];

export const getUsers = (): Array<User> => {
  return users;
};

export const getUserById = (id: number): User | undefined => {
  return users.find(user => user.id === id);
};

export const createUser = (user: User): void => {
  users.push(user);
};

export const updateUser = (user: User): void => {
  const index = users.findIndex(u => u.id === user.id);
  users[index] = user;
};

export const deleteUser = (id: number): void => {
  const index = users.findIndex(u => u.id === id);
  users.splice(index, 1);
};
