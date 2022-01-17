import React, {Component} from "react";
import { Navbar, NavbarBrand } from "reactstrap";
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
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Resitorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>

                <div className="container">
                    <div className="row">
                        <MenuMini2 dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                    </div>
                    <DishDetailMini dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                </div>
            </div>



        );
    }
}


export default Main;
