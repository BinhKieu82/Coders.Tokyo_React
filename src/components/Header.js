import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Header.css';
import tickImg from '../img/tick.svg';


class Header extends Component {
    
  render() {    
    const { newItem, onKeyUp, onChange } = this.props;
    return (
      <div className="Header">
        <img src={tickImg} width={32} height={32} alt="#" />
        <input 
          type="text" 
          placeholder="Add a new item" 
          value={newItem} //anytime once value changed, need onChange method
          onChange={onChange}
          onKeyUp={onKeyUp} />
      </div> 
    );
  }
}

export default Header;