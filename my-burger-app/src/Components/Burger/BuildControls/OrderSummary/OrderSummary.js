import React, {Component} from 'react';
import Auxillary from '../../../../hoc/Auxillary';
import Button from '../../../Layout/Button/Button';
export default class OrderSummary extends Component {

    componentWillUpdate(){
        console.log('orderSummary ia update');
    }


    render (){
        const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey =>{
        return <li
        key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}</li>
    });
        return (
            <Auxillary>
                <h3>Your Order Summary</h3>
                <p>A delicious burger with following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>TOTAL PRICE:{this.props.totalPrice.toFixed(2) }</strong></p>
                <p>Continue to checkout? </p>
                <Button btnType="Danger" clicked={this.props.cancelOrder}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.continueOrder}>CONTINUE</Button>
    
            </Auxillary>
        );
    };
    
    

};
