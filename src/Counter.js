import React, { Component } from "react";

class Counter extends Component {
    //this will run whenever the component is mounted or created
constructor(props){
    super(props)
    this.state= {
        count: 0
    };
}

// The empty () means that it doesn't take any parameters
// Here we are setting a function for the button increment, so that evevrytime we click it adds +1 to the count
increment = () => {
    this.setState({
        count: this.state.count + 1
    })
};

// Setting function to remove 1 every time we click on the button
decrement = () => {
    this.setState({
        count: this.state.count - 1
    })
}

    render() {
        return (
            //here in the {} = we called the variable which we defined a few lines above
            <div>
             <p> This is our current count: {this.state.count} </p>
             <button onClick={this.increment}>Increment</button>
             <button onClick={this.decrement}>Decrement</button>
            </div>
          );
    }
}

export default Counter;