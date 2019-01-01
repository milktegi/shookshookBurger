import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';

const toolBar = props => {
  return (
    <header className={classes.Toolbar}>
      
        <Logo/>
      
      <div>
        menu
      </div>
      <nav>
        <ul>...</ul>
      </nav>
    </header>
  );
};

export default toolBar;
