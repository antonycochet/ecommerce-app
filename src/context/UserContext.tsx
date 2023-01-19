import { createContext } from 'react';

const UserContext = createContext<{ username: string }>({ username: '' });

export default UserContext;
