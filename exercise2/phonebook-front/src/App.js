import React from 'react';
import Person from './Person';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      id: 0,
    }
  }

  componentDidMount() {
    console.log('did mount') 
    axios
      .get('http://localhost:3001/api/persons')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ persons: response.data})
      })
  }

  addPerson = (event) => {
    event.preventDefault()
    const personObject = {
        name: this.state.newName,
        number: this.state.newNumber,
        id: this.state.persons[this.state.persons.length - 1].id + 1,
    }

    const person = this.state.persons.concat(personObject)

    if(this.state.persons.some(x => x.name === personObject.name) || this.state.persons.some(y => y.number === personObject.number)) {
        alert("Person is already in the phonebook!")
    } else {
      axios
        .post('http://localhost:3001/api/persons', personObject)
        .then(response => {
          console.log(response)
          this.setState({
            persons: person,
            newName: '',
            newNumber: '',
            id: 0 })
          })
        }
  }

  deletePerson = (id, name) => {
    return () => {
      const url = `http://localhost:3001/api/persons/${id}`
      if(window.confirm(`Delete ${name}?`)) {
        axios
          .delete(url)
          .then(response => {
            this.setState({
              persons: this.state.persons.filter(person => person.id !== id ), //TÄMÄ EI HYVÄ!
              newName: '',
              newNumber: '',
              id: 0 })
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
