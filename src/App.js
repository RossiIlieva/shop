import React, { Component } from 'react';


import Item from './Item.js';
import Btns from './Btns.js';


class App extends Component {

  constructor() {
    super();
    this.state = {list:['Milk', 'Eggs', 'Bread', 'Water','Gum']};
  }

  onClickHandler() {
    //   this.state.list = this.state.list.slice(0,-1);
    const newState = {list: this.state.list.slice(0,-1)};
      this.setState(newState);
  }

  render() {

    return (

        <div className="container">

        <div className="jumbotron">
            <h1>Shopping</h1>
            <p>This is shopping, my way...</p>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-lg-12">

                    <form>
                        {this.state.list.map(x => (
                            <Item>{x}</Item>
                        ))}

                        <button type="button"
                            onClick={this.onClickHandler.bind(this)}
                            className="btn btn-primary"
                            id="button-del">Delete</button>
                    </form>

                </div>
            </div>

        </div>
      </div>

    );
  }
}

export default App;
