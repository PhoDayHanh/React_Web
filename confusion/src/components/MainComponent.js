import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import MenuMini2 from './MenuMini2';
import DishDetailMini from './DishDetailMini';
import { DISHES } from '../shared/dishes';


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    };

    onDishSelect(dishId) {

        this.setState({
            selectedDish: dishId
        });

    }

    render() {
        return (
           
        
                <div>
                    <Header/>
                    <div className="container">
                        <div className="row">
                            <MenuMini2 dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                        </div>
                        <DishDetailMini dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                        <Footer/>
                    </div>
                </div>
            




        );
    }
}


export default Main;
