import React from 'react';

import Aux from '../../../hoc/Auxx';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const ingSummary = Object.keys(props.ingredients).map(ingkey => {
    return (
      <li key={ingkey}>
        <span style={{ textTransform: 'capitalize' }}>{ingkey}</span> : {' '}
        {props.ingredients[ingkey]}
      </li>
    );
  });

  return(
    <Aux>
      <h3>order</h3>
      <p>주문 내역입니다</p>
      <ul>
				{ingSummary}
			</ul>
			<p>Continue to checkout?</p>
      <Button 
      btnType="Danger"
      clicked={props.purchaseCancelled}
      >취소</Button>
      <Button 
      btnType="Success"
      clicked={props.purchaseContinued}
      >계속</Button>
    </Aux>
  );
};

export default orderSummary;
