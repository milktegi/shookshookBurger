import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{ label: '야채', type: 'salad'},
	{ label: '토마토', type: 'bacon'},
	{ label: '치즈', type: 'cheese'},
	{ label: '패티', type: 'meat'},
];

const buildControls = props => {

	return(
		<div className={classes.BuildControls}>
			<p style={{ color: 'white' }}>현재 가격은 {' '} 
				<strong>{props.price.toFixed(0)}</strong>원입니다.</p>
			{controls.map(ctrl => (
				<BuildControl
			  	key={ctrl.label}
			  	label={ctrl.label}
					added={() => props.ingredientsAdded(ctrl.type)}
					removed={() => props.ingredientsRemoved(ctrl.type)}
					disabled={props.disabled[ctrl.type]}
				/>
			))}
			<button 
			disabled={!props.purchasable}
			className={classes.OrderButton}
			onClick={props.ordered}
			>ORDER NOW</button>
		</div>
	);
	
};


export default buildControls;