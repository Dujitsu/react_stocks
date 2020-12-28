import React from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_SANDBOX_API_KEY;

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {symbol: ''};
    }

    componentDidMount() {
        this.fetchSymbol();
        console.log(this.state.symbol)
    }


    fetchSymbol = () => {
        const url = '/stock/IBM/quote';
        console.log(url)
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: API_KEY
            }
        }
        console.log(config)
        //const url = 'https://sandbox.iexapis.com/stable/stock/aapl/cash-flow?token=' + API_KEY;
        axios.get(url)
            .then((response) => {
                console.log(response);
                //const { symbol } = response.data.symbol;

                //this.setState({ symbol });
                //console.log(symbol);
            })
            .catch((error) => {
                console.log(error);
            });
    }  
    render() { 
        const { symbol } = this.state;
        return ( <h1>{ symbol }</h1> );
    }
}

export default App; 