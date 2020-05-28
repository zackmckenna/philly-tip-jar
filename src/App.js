import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import tipJarData from './data/tipjardata.json'
import tipJarLocationData from './data/locationData.js'
import TipJarNav from './components/TipJarNav'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

function App() {
  const [ peopleData, setPeopleData] = useState([])
  const [ locationData, setLocationData ] = useState([])
  const [ searchParam, setSearchParam ] = useState('')
  const [ searchResults, setSearchResults ] = useState([])

  useEffect(() => {
    setPeopleData(tipJarData)
    setLocationData(tipJarLocationData)
    console.log(tipJarLocationData)
   }, [])

  useEffect(() => {
    if (searchParam === '' || searchParam.length <= 2){
      setSearchResults(peopleData)
    } else {
      const results = peopleData.filter(function(e){
        return e.Name.startsWith(searchParam)
      })
      setSearchResults(results)
    }
  }, [searchParam]);

  const handleSearchChange = (event) => {
    setSearchParam(event.target.value)
  }

  const generateVenmoLink = (venmoId) => {
    return `https://venmo.com/${venmoId}`
  }



  return (
    <div className="App">
      <TipJarNav/>
      <Container>
        <Jumbotron className='mt-4'>
          <h1>Philly Tip Jar</h1>
          <p>
            Here to help the thousands of service workers furloughed because of COVID-19.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <Form >
          <Form.Label>Search by person or location</Form.Label>
          <Form.Control
            onChange={(e) => handleSearchChange(e)}
            value={searchParam}
            type="text"
            placeholder="search"
            />
        </Form>
        {searchResults.map((person, index) => {
          if (index <= 20){
            return (
              <li key={person.id}>{person.Name} {person.Venmo ? <a href={generateVenmoLink(person.Venmo)}>Venmo</a> : null} </li>
            )
          } else {
            return
          }
          })}
      </Container>
    </div>
  );
}

export default App;
