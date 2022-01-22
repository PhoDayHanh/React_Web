import React, { Component } from "react";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import MenuMini2 from './MenuMini2';
import DishDetailMini from './DishDetailMini';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,

        }
    };


    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            // <div>
            //     <Header />

            //         <Switch>

            //         </Switch>


            //     <Footer />
            // </div>

            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/menu' component={() => <MenuMini2 dishes={this.state.dishes} />} />
                            <Redirect to="/home" />
                        </Switch>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}


export default Main;
