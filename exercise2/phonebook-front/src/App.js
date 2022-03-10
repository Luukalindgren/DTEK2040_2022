import React from 'react';
import Person from './Person';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas',
          number: '040-123456'}
      ],
      newName: '',
      newNumber: ''
    }
  }

  addPerson = (event) => {
    event.preventDefault()
    const personObject = {
        name: this.state.newName,
        number: this.state.newNumber
  }

    const person = this.state.persons.concat(personObject)

    if(this.state.persons.some(x => x.name === personObject.name) || this.state.persons.some(y => y.number === personObject.number)) {
        alert("Person is already in the phonebook!")
    } else {
    this.setState({ 
        persons: person,
        newName: '',
        newNumber: '' })
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
              <Person key={person.name} name={person.name} number={person.number} />)}
          </tbody>
        </table>
      </div>
      
    )
  }
}

export default App
