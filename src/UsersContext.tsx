import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';
import Loading from './components/Loading';

export type User = {
  id: number,
  name: string,
  age: string,
  gender: string,
  type: string
};

type UserInput = Omit<User, 'id'>;

interface UsersProviderProps {
  children: ReactNode;
}

interface UsersContextData {
  users: User[];
  getUser: (id: Number, name: string) => Promise<User>;
  createUser: (user: UserInput) => Promise<void>;
  deleteUser: (id: Number) => Promise<void>;
  editUser: (id: Number, user: UserInput) => Promise<void>;
}

export const UsersContext = createContext<UsersContextData>(
  {} as UsersContextData
);

export function UsersProvider({ children }: UsersProviderProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get('users').then(response => {
      setUsers(response.data.users);
      setIsLoading(false)
    })
  }, []); 

  async function getUser(id: Number, name: string) {
    const response = await api.get('/users/' + id +'/'+ name)

    return response.data;
  }

  async function createUser(userInput: UserInput) {
    const response = await api.post('/users', userInput)
    const { user } = response.data;
    setUsers([...users, user]);
  }

  async function deleteUser(id: Number) {
    const response = await api.delete('/users/' + id)
    const users = response.data;

    setUsers(users);
  }

  async function editUser(id: Number, data: UserInput) {
    const response = await api.put('/users/' + id, data)
    const user = response.data;

    setUsers(user);
  }

  return (
    <UsersContext.Provider value={{ users, createUser, deleteUser, editUser, getUser }}>
      <Loading isLoading={isLoading} />
      {children}
    </UsersContext.Provider>
  )
}