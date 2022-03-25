import React, { createContext, useState } from 'react';
import { useRouter } from 'next/router';
export const Context = createContext();
export default function ContextProvider({ children }) {
  const router = useRouter();
  
  const value = {
    
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
