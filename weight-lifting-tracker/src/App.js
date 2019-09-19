import React from 'react';
import { Route } from 'react-router-dom';

import { AppContainer } from './styledElements/containers';

import Register from './components/Register';
import Login from './components/Login';



function App() {
  return (
    <AppContainer>
      <Login />
      {/* <Register /> */}
    </AppContainer>
  );
}

export default App;
