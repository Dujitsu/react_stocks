import React from 'react'

const stockHeader = () => {
    return (
        <div>
            
        </div>
    )
}


/*
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
    */
export default stockHeader
