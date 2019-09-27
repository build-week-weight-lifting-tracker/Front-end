import React from 'react'

/*import FormikWeightForm from './Journal'*/
import {Tab} from 'semantic-ui-react'
import Header from "./Header2"
import Footer from './Footer'
import {matchPath} from 'react-router-dom'

  

export default function TabNavigation({panes}){
  const defaultActiveIndex = panes.findIndex(pane => {
    return !!matchPath(window.location.pathname, {
      path: pane.menuItem.to,
      exact: true
    });
  });
    return (
        <div>
        <Header />
        <Tab defaultActiveIndex={defaultActiveIndex} menu={{ pointing: true }} panes={panes} />
        <Footer />
        </div>
    )
}