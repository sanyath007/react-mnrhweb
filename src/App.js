import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router-dom';
import './components/layouts/theme.css';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {

    };
  }
  render () {
    return (
      <div className="App">
        <Header></Header>
  
        <main className="py-4">
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </main>
  
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
