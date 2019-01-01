import React from 'react';

import Aux from '../../../hoc/Auxx';

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
    </Aux>
  );
};

export default orderSummary;
