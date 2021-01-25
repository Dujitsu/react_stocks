import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
require('dotenv').config();

ReactDOM.render(<SearchBar />, document.getElementById('searchBar'));