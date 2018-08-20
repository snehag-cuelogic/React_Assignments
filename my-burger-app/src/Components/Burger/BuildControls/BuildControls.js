import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' }
];


const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(cn => (
            <BuildControl
                key={cn.label}
                label={cn.label}
                added={() => props.ingredientAdded(cn.type)}
                removed={() => props.ingredientRemoved(cn.type)}
                disabled={props.disabled[cn.type]}
            />
        ))}
        <button
            className={classes.OrderButton}
            disabled={! props.purchasable}
            onClick={props.orderNow}
        >
            ORDER NOW
        </button>
    </div>
);
export default buildControls;