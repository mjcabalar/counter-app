import React from 'react';
import {increment,decrement} from '../redux/actions';
import {connect} from 'react-redux';

class CounterButtons extends React.Component{

    onIncrement = () => {
        this.props.increment();
    }

    onDecrement = () => {
        this.props.decrement();
    }

    render(){
        return(
            <div>
                <button onClick = {this.onDecrement}>-</button>
                <button onClick = {this.onIncrement}>+</button>
            </div>
        );
    }
}

export default connect(null,{increment,decrement})(CounterButtons);