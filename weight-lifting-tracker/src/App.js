
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {NavLink, Route } from 'react-router-dom';
import { AppContainer } from './styledElements/containers';
import { Home } from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
/*import TabNav from './components/TabNav.js';
import Header2 from './components/Header2.js';*/
import ExerciseList from './components/ExerciseList.js';
import UserWorkout from './components/UserWorkout.js';
import TabNavigation from './components/Dashboard'
import Welcome from './components/Welcome'
import PersonDetails from './components/PersonDetails'
import {Tab} from 'semantic-ui-react'

export default function App() {
  

  const panes = [
      {
        menuItem: {
          as: NavLink,
          content: "Home" ,
          to: "/",
          key: "home",
          exact: true
        },
        render: () => <Route path="/"><Tab.Pane attached={false}><Welcome /></Tab.Pane></Route>
      },
      {
        menuItem: {
          as: NavLink,
          content: "Profile",
          to: "/profile",
          key: "profile"
        },
        render: () => <Route path="/profile"><Tab.Pane attached={false}><PersonDetails /></Tab.Pane></Route>,
      },
      {
        menuItem: {
          as: NavLink,
          content: "Workout Journal",
          to: "/journal",
          key: "journal"
        },
        render: () => <Route path="/journal"><Tab.Pane attached={false}><UserWorkout /></Tab.Pane></Route>,
      },
      {
        menuItem: {
          as: NavLink,
          content: 'Exercise List',
          to: "/exercises",
          key: "exercises"
        },
        render: () => <Route path="/exercises"><Tab.Pane attached={false}><ExerciseList /></Tab.Pane></Route>,
      },
    ]
  

  const [user, setUser] = useState('hey');
  /*useEffect( () => {
      axios
      .get('https://weightlifting-tracker-bw.herokuapp.com/api/users/:3')
      .then(response => console.log(response.data))
      .catch(err => console.log("Error: ", err))
  }, [])*/

  return (

    <AppContainer>
      {/* <Header />
      <TabNav />
      <Route exact path='/' component={ExerciseList} /> */}
      
      {user ? <Route exact path='/' render={props => <TabNavigation {...props} panes={panes} />} /> : <Route exact path='/' component={Home} />}


    {/*<Route path='/user' component={UserWorkout} />*/}
      <Route path='/login' render={props => <Login {...props} setUser={setUser} /> } />
      <Route path='/register' render={props => <Register {...props} setUser={setUser} /> } />

    </AppContainer>


  );
}
