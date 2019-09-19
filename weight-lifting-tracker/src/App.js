import React from 'react';
import { Route } from 'react-router-dom';
import { AppContainer } from './styledElements/containers';

import Register from './components/Register';
import Login from './components/Login';

import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import ExerciseList from './components/ExerciseList.js';

export default function App() {







  return (
    <AppContainer>
      <Header />
      <TabNav />
      <Route exact path='/' component={ExerciseList} />
    </AppContainer>

  );
}
