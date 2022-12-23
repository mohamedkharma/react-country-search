import React, { useState, useEffect }from "react";
import "./App.css";

// The Country component displays details about a single country
function Country(props) {  
  // Render the country's name, capital, continents, currencies, languages, and population
  return (
    <div>
        <h2>{props.name.common}</h2>
        <ul>
        <li>Capital: {props.capital}</li>
        <li>Continents: {props.continents}</li>
        <li>Currencies: {props.currencies && Object.keys(props.currencies).join(', ')}</li>
        <li>Languages: {props.languages && Object.values(props.languages).join(', ')}</li>
        <li>Population: {props.population}</li>
        </ul>
    </div>
  );
}

// Contains a search form for searching for countries
function CountrySearchField(props) {
  // State to store the search query
  const [searchText, setSearchText] = useState("");
  // State to store the error message
  const [errorMessage, setError] = useState('');
  // State to store the loading state
  const [loading, setLoading] = useState(false);

  // Event handler for when the user types in the search field
  function handleChange(event) {
    setSearchText(event.target.value);
  }
    
  // The effect is called every time searchText changes
  useEffect(() => {
    if (searchText) {
      fetch(`https://restcountries.com/v3.1/name/${searchText}`)
        .then(response => response.json())
        .then(json => {
          if (json.status === 404) {
            props.onsearch([]);
            setError('No results found');
            setLoading(false);
          }
          // Otherwise, update the search results and clear the error message
          else {
            props.onsearch(json);
            setError('');
            setLoading(false);
          }
        })
      } 
      // Clear the search results if searchText is empty
      else {
        props.onsearch([]);
      }
  }, [searchText]);


  // Stylling the searchbar
  return (
    <div>
      <p style={{ marginBottom:'70px'}}></p>
      <form>
        <p style={{ marginBottom:'0px', marginTop:'30px', fontWeight:'400' }}>Country: </p>
        <input
          type="text"
          placeholder="Enter a country name"
          value={searchText}
          onChange={handleChange}
        />
      </form>
      <p style={{ marginBottom:'70px'}}></p>
      {errorMessage && <p>{errorMessage} </p>}
    </div>
  );
}

function App() {
  // State to store the search results
  const [searchResults, setSearchResults] = useState([]);
  // Function to update the search results
  const viewResults = (searchResults) => { setSearchResults(searchResults); }
  
  return (
    <div className="App">
      <div className="App-header">
        <h1>Country Search</h1>
      </div>
      <div className="mx-auto" style={{ maxWidth: 400 }}>
        <CountrySearchField onsearch={viewResults}/>
        <div>
            {searchResults.map((result)=> ( 
              <Country 
                {...result} 
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;