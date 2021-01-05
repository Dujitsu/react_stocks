import React from 'react';
import axios from 'axios';
import SubTest from './SubTest.js'
require('dotenv').config();

class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = {symbol: ''};

    }

    componentDidMount() {
        this.fetchSymbol();
        console.log(this.state.symbol)
    }

    fetchSymbol = () => {
        axios.get(`https://sandbox.iexapis.com/stable/stock/aapl/cash-flow?token=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                console.log(response.data.symbol);
                const { symbol } = response.data.symbol;

                this.setState({ symbol });
            })
            .catch((error) => {
                console.log(error);
            });
    }  
    render() { 
        const { symbol } = this.state;
        return ( 
            <h1>{ symbol }</h1>
            //<SubTest setCounter=1 />
        );
    }
}

export default Test; 