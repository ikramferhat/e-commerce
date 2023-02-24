import { createContext, useState, useEffect, SyntheticEvent, useMemo } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [path,setPath] = useState('');
  const [price,setPrice] = useState(100)

  const contextData = {
    path,
    setPath,
    price,
    setPrice
  };
  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
};
