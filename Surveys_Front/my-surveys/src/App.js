import React, { Component } from 'react';
import Appbar from './components/Navbar/Navbar';
import Container  from './components/container/Container';
import Footer from './components/Footer/Footer';


class App extends Component {
  render(){
    return<> 
    <div className= 'App'>
    <Appbar />
    {<main>
      <Container />
     
      
      </main>}
      <Footer />
   </div> 
    </>
  }
 
}

export default App;