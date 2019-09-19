import React from 'react';
import { Route } from 'react-router-dom';

import { AppContainer } from './styledElements/containers';

import Register from './components/Register';



function App() {
  return (
    <AppContainer>
      <Register />
    </AppContainer>
  );
}

export default App;
