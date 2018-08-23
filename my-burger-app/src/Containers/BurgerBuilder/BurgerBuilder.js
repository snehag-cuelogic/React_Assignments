import React, { Component } from 'react';

import Auxillary from '../../hoc/Auxillary';

import Burger from '../../Components/Burger/Burger';

import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

import Modal from '../../Components/Layout/Modal/Modal';

import OrderSummary from '../../Components/Burger/BuildControls/OrderSummary/OrderSummary';

const INGREDIENT_PRICES={
    salad:0.5,
    meat:1.5,
    cheese:0.4,
    bacon:0.7
}

export default class BurgerBuilder extends Component {

    // constructor (props){
    //     super(props);
    //     this.state= {...}
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice:4.0,
        purchasable:false,
        purchasing:false
    }

    addIngredientHandler =  (type) =>{

        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        } 
        updatedIngredients[type]  = updatedCount;
        const priceAddition  = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice:newPrice,
            ingredients:updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    } 

    removeIngredientHandler =  (type) =>{
        const oldCount = this.state.ingredients[type];
        if(oldCount < 0){
            console.log('Please select something!');
            return false;
        }
        const updatedCount = oldCount-1;
        const updatedIngredients = {
            ...this.state.ingredients
        } 
        updatedIngredients[type]  = updatedCount;
        const priceDeduction  = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice:newPrice,
            ingredients:updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    } 

    updatePurchaseState (ingredients){
        
        const sum =Object.keys(ingredients)
        .map(igKey =>{
            return ingredients[igKey];
        })
        .reduce((sum,el)=>{
            return sum+el;
        },0); 
        this.setState({
            purchasable:sum>0
        });
    }

    purchaseHandler = () =>{
        this.setState({
            purchasing:true
        });
    }

    purchaseCancelHandler =()=>{
        this.setState({purchasing:false});
    }
    purchaseContinueHandler = ()=>{
        alert('Order is continued!');
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients

        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (

            <Auxillary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                    ingredients={this.state.ingredients}
                    cancelOrder={this.purchaseCancelHandler}
                    continueOrder={this.purchaseContinueHandler}
                    totalPrice={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredient={this.state.ingredients} />
                <BuildControls 
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                price= {this.state.totalPrice}
                purchasable={this.state.purchasable}
                orderNow={this.purchaseHandler}
                />
            </Auxillary>
        );
    }

}