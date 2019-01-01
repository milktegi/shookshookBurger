import React from 'react';
import classes from './Toolbar.css';

const toolBar = props => {
  return (
    <header className={classes.Toolbar}>
      <div>메뉴</div>
      <div>Logo</div>
      <nav>
        <ul>...</ul>
      </nav>
    </header>
  );
};

export default toolBar;
