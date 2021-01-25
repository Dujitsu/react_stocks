import React from 'react';
require('dotenv').config();

class Temp extends React.Component {
    constructor(props){
        super(props);
        this.state = {symbol: ''};

    }

    componentDidMount() {
        console.log(this.state.symbol)
    }

    render() { 
        return ( 
            <h1>555 H1</h1>
        );
    }
}

export default Temp; 