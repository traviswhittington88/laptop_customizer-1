import React from 'react';
import './App.css';
import slugify from 'slugify';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class Currency extends React.Component {
    constructor(props) {
        super(props) 
    }

    render() {
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
          );
      
        return (
            USCurrencyFormat.format(total)
        )
    }
}

export default Currency;