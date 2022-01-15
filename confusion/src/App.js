import React, { Component } from 'react';
import {DISHES} from  './shared/dishes';
import NewMenu from './components/NewMenu';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';

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
            <NewMenu dishes={this.state.dishes}/>
           
          </div>
        );
      }
}


export default App;
