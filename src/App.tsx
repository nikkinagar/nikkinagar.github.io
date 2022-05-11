import React, { FunctionComponent }  from 'react';

import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import './App.css';

const App: FunctionComponent<{}> = () => (
    <>
      <Header/>
      <NavBar/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>

    </>
  );

export default App;
