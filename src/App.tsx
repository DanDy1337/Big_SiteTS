import React from 'react';
import Head from './components/Head';
import Body from './components/Body';
import Fishka from './components/Fishka';
import Front from './components/Front'
import './style.css';

function App(){

  return(
    <div style={{height: '100%',width: '100%'}}>
        <Front />
        <Head />
        <Fishka />
        <Body />
    </div>
  )
}

export default App;
