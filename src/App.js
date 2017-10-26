import React, { Component } from 'react';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import Footer from './Footer/Footer';
import Resume from './Resume/Resume';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className='body'>
          <Intro />
          <Resume />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
