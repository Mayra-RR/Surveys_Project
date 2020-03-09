import React, { Component } from 'react';
import Appbar from './components/Navbar/Navbar';
import Container  from './components/container/Container';


class App extends Component {
  render(){
    return<> 
    <div className= 'App'>
    <Appbar/>
    {<main>
      <Container />
     
      
      </main>}
   </div> 
    </>
  }
 
}

export default App;