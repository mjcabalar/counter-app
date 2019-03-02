import React from 'react';
import {connect} from 'react-redux';

const CounterLabel = ({count}) => (
    <div>
        <h1>{count}</h1>
    </div>
);


const mapState = (state) => ({count: state.count});

export default connect(mapState)(CounterLabel);