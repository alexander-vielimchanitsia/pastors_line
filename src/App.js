import React from 'react';

import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import './App.sass';


const App = () => {
  return (
    <div className="App d-flex flex-column">
      <Content/>
      <Footer/>
    </div>
  );
};

export default App;
