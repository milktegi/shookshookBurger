import React from 'react';
import classes from './Burger.css';
import Ingredients from './Ingredients/Ingredients';

const burger = props => {
	let transformedIng = 
	  Object.keys(props.ingredients)
		      .map(ingKey => {
           return [...Array(props.ingredients[ingKey])]
					.map((_, i) => {
			     return <Ingredients key={ingKey + i} type={ingKey}/>
		});
	}).reduce((arr, el) => {
		return arr.concat(el)
	}, []);
	if(transformedIng.length === 0) {
		transformedIng = <p>Please start adding ingredients!</p>
	}

	return(
		<div className={classes.Burger}>
			<Ingredients type="bread-top"/>
		{transformedIng}
			<Ingredients type="bread-bottom"/>
		</div>
	)
}

export default burger;