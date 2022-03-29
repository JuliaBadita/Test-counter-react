import React, { Component } from "react";
import './index.css'

class Counter extends Component {
    //this will run whenever the component is mounted or created
constructor(props){
    super(props)
    this.state= {
        count: 0,
        nombreMaxPersonnes: 5
    };
}

// The empty () means that it doesn't take any parameters
// Here we are setting a function for the button increment, so that everytime we click on it, it adds +1 to the count
increment = () => {
    if (this.state.count !== this.state.nombreMaxPersonnes){
        this.setState((state, props) => ({
        count: this.state.count + 1
    }))}
};

// Setting function to remove 1 every time we click on the button
decrement = () => { 
    if (this.state.count !== 0) {      
    this.setState((state, props) => ({
        count: state.count - 1
    }))}
};


// Reset button parameters
reset = () => {
    this.setState((state, props) => ({
        count:  0
    }))
};

    render() {

       
        const threshold = 3;
        let classNameInput = "";
        if (this.state.count === this.state.nombreMaxPersonnes) {
            classNameInput = 'background-red';
        }
        else if (this.state.count >= threshold) {
            classNameInput = 'background-orange';
        }
        else {
            classNameInput = "";
        }


        return (
            //here in the {} = we called the variable which we defined a few lines above
            <div>             
             <p> Il y a <input type="number" value={this.state.count} readOnly className={classNameInput}/> personnes dans la salle. </p>
             <button onClick={this.decrement}>Moins</button>
             <button onClick={this.increment}>Plus</button>
             <button onClick={this.reset}>Reset</button>
            </div>
          );
    }
}

export default Counter;