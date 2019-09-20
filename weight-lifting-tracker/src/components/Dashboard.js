import React from 'react'
import PersonDetails from './PersonDetails'
import Journal from './Journal'
import {Tab} from 'semantic-ui-react'

const panes = [
    {
      menuItem: 'Personal Info',
      render: () => <Tab.Pane attached={false}><PersonDetails /></Tab.Pane>,
    },
    {
      menuItem: 'Workout Journal',
      render: () => <Tab.Pane attached={false}><Journal /></Tab.Pane>,
    },
    {
      menuItem: 'Tab 3',
      render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
    },
  ]

export default function TabNavigation(){
    return (
        <Tab menu={{ pointing: true }} panes={panes} />
    )
}