import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CompanyList from './CompanyList';
require('dotenv').config();

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [companyListDefault, setCompanyListDefault] = useState();
  const [CompanyList, setCompanyList] = useState();

  const fetchData = async () => {
    return await fetch('https://sandbox.iexapis.com/stable/ref-data/symbols?token=${process.env.REACT_APP_API_KEY}')
      .then(response => response.json())
      .then(data => {
         setCompanyList(data) 
         setCompanyListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = companyListDefault.filter(Company => {
      return Company.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setCompanyList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>Company List</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <CompanyList CompanyList={CompanyList}/>
    </>
   );
}

export default SearchPage