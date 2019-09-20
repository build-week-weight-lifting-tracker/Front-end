import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { AppContainer } from './styledElements/containers';
import { Home } from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import ExerciseList from './components/ExerciseList.js';

export default function App() {
  const [user, setUser] = useState('hey');

  




  return (
    <AppContainer>
      {/* <Header />
      <TabNav />
      <Route exact path='/' component={ExerciseList} /> */}
      {user ? <Route exact path='/' component={ExerciseList} /> : <Route exact path='/' component={Home} />}
      <Route path='/login' render />
      
    </AppContainer>

  );
}
