import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from "react";
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';




class construct extends Component  {
 
};

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    }
 
  };

render() {
  return (
    <div>
      <Navbar dark color="primary"> 
      <div className="container">
        <NavbarBrand href="/">Resitorante Con Fusion</NavbarBrand>
      </div>
      </Navbar>
      <Menu dishes={this.state.dishes}/>
    </div>
  );
}
 
};

export default App;
