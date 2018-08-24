import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
const  transformedIngredients = Object.keys(props.ingredient).map(ing => {
    return [...Array(props.ingredient[ing])].map((_,i)=>{
        return <BurgerIngredient key={ing + i} type={ing}/>
    });
}).reduce((arr, el)=> {
return arr.concat(el)
},[]);
console.log(transformedIngredients);
let someString= <p>Please start adding ingredients</p>;
if( transformedIngredients.length > 0){
someString=null;
}
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            { someString }
            { transformedIngredients }
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;