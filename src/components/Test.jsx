import React from 'react';
import axios from 'axios';
import SubTest from './SubTest'
import Temp from './Temp'
require('dotenv').config();

class Test extends React.Component {
state = {
    symbol: ''
};
    componentDidMount() {
        this.fetchSymbol();
        console.log(this.state.symbol)
    }

    fetchSymbol = () => {
        axios.get(`https://sandbox.iexapis.com/stable/stock/aapl/cash-flow?token=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                console.log(response);
                this.setState({ symbol: response.data.symbol });
            })
            .catch((error) => {
                console.log(error);
            });
    }  
    render() { 
        const { symbol } = this.state;
        return ( 
            <div>
                <SubTest title="testing"/>
                <div className="TempTest"><Temp /></div>
                <h1>{ symbol }</h1>
                <h1>4444 H1</h1>
            </div>
            //<SubTest setCounter=1 />
        );
    }
}

export default Test; 