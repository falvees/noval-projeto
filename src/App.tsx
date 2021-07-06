
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { UsersProvider } from './UsersContext';


import { GlobalStyle } from './styles/global';
const App: React.FC = () => {


  return (
    <BrowserRouter>
        <UsersProvider>
          <Routes />
          <GlobalStyle />
        </UsersProvider>
    </BrowserRouter>
  )
};
export default App;