import React from 'react';
import './App.css';
import FormikWeightForm from './components/Journal'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div>
    <Header></Header>
    <FormikWeightForm />
    <Footer></Footer>
    </div>
  );
}

export default App;
