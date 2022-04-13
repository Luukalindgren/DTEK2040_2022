import React from 'react';
import Person from './Person';
import axios from 'axios';

const baseUrl = '/api/persons'

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(res => res.data)
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      id: "",
    }
  }

  componentDidMount() {
    console.log('did mount') 
    axios
      .get(baseUrl)
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ persons: response.data})
      })
  }

  addPerson = (event) => {
    event.preventDefault()
    const personObject = {
        name: this.state.newName,
        number: this.state.newNumber
    }

    const person = this.state.persons.concat(personObject)


    axios
      .post(baseUrl, personObject)
      .then(response => {
        console.log(response)
        this.setState({
          persons: person,
          newName: '',
          newNumber: '',
          id: "" })
        })
  }

  deletePerson = (id, name) => {
    return () => {
      const url = `/api/persons/${id}`
      if(window.confirm(`Delete ${name}?`)) {
        axios
          .delete(url)
          .then(response => {
            this.setState({
              persons: this.state.persons.filter(person => person.id !== id ), //TÄMÄ EI HYVÄ!
              newName: '',
              newNumber: '',
              id: "" })
            })
      }
    }
  }
  

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: <input value={this.state.newName} onChange={this.handleNameChange} />
          </div>
          <div>
            numero: <input value={this.state.newNumber} onChange={this.handleNumberChange} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <table>
          <tbody>
            {this.state.persons.map(person => 
              <Person 
                key={person.name} name={person.name} 
                number={person.number} id={person.id} handleClick={this.deletePerson(person.id,person.name)}/>)}
          </tbody>
        </table>
      </div>
      
    )
  }
}

export default App
