import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createContext } from "react";
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';


export interface IContextProviderProps {
  user: UserStore;
  device: DeviceStore;
}

export const Context = createContext<IContextProviderProps | null>(null);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={{
      user: new UserStore(),
      device: new DeviceStore()
    }}> 
      <App />
  </Context.Provider>
);

