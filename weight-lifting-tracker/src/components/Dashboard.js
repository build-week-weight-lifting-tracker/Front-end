import React from 'react'
import PersonDetails from './PersonDetails'
/*import FormikWeightForm from './Journal'*/
import {Tab} from 'semantic-ui-react'
import Header from "./Header2"
import Footer from './Footer'
import ExerciseList from './ExerciseList'
import UserWorkout from './UserWorkout'
import {NavLink, Route, matchPath} from 'react-router-dom'

const panes = [
    {
      menuItem: {
        as: NavLink,
        content: "Home",
        to: "/",
        key: "home",
        exact: true
      },
      render: () => <Route path="/"><Tab.Pane attached={false}></Tab.Pane></Route>
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

  const defaultActiveIndex = panes.findIndex(pane => {
    return !!matchPath(window.location.pathname, {
      path: pane.menuItem.to,
      exact: true
    });
  });

export default function TabNavigation(){
    return (
        <div>
        <Header />
        <Tab defaultActiveIndex={defaultActiveIndex} menu={{ pointing: true }} panes={panes} />
        <Footer />
        </div>
    )
}