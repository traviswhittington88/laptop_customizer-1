import React, { Component } from 'react';
import Features from './Features'
import Summary from './Summary'
import Currency from './Currency'
import Header from './Header'
import './App.css';


class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <Features features={this.props.features} selected={this.state.selected} updateFeature={this.updateFeature}/>
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            <Summary selected={this.state.selected} />
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                <Currency selected={this.state.selected}/>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;