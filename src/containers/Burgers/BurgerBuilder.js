import React, { Component } from 'react'
import Aux from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INREGIDENT_PRICES = {
	salad: 500,
	cheese: 500,
	meat: 1000,
	bacon: 700
}

class BurgerBuilder extends Component {

	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 2000,
		purchasable: false,
		orderClicked: false,
	}

	// purchaseHandler 

	purchaseHandler = () => {
		this.setState({ orderClicked: true });
	}

	purchaseCancelHandler = () => {
		this.setState({ orderClicked: false });
	}

	// handlePurchase 
	updatePurchaseState(ing) {
		const ingredients = {
			...this.state.ingredients
		};
		// turn it into an array 
		const sum = Object.keys(ingredients)
		.map(ingKey => {
			return ingredients[ingKey];
		})
		.reduce((sum, ele) => {
			return sum + ele;
		}, 0);
		this.setState({ purchasable: sum > 0 });

	}

	addIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients
		}
		updatedIngredients[type] = updatedCount;
		// price
		const priceAddition = INREGIDENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients
		});
		this.updatePurchaseState(updatedIngredients);
	}

	removeIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];
		if(oldCount <= 0) {
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
			...this.state.ingredients
		}
		updatedIngredients[type] = updatedCount;
		// price
		const priceDeduction = INREGIDENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;
		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients
		});
		this.updatePurchaseState(updatedIngredients);
	}

	render() {
		const disabledInfo = {
			...this.state.ingredients
		}
		for(let key in disabledInfo){
			disabledInfo[key] = disabledInfo[key] <= 0
		}
		// { salad: true, bacon: true ... }
		return (
			<Aux>
				<Modal 
				show={this.state.orderClicked}
				modalClosed={this.purchaseCancelHandler}
				>
					<OrderSummary ingredients={this.state.ingredients}/>
				</Modal>
				<Burger ingredients={this.state.ingredients}/>
				<BuildControls
				ingredientsAdded={this.addIngredientHandler}
				ingredientsRemoved={this.removeIngredientHandler}
				disabled={disabledInfo}
				purchasable={this.state.purchasable}
				ordered={this.purchaseHandler}
				price={this.state.totalPrice}
				/>
			</Aux>
		)
	}
}

export default BurgerBuilder;