import React from 'react';

const Person = (props) => {
  return(
    <div>
      {props.name}
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas'}
      ],
      newName: ''
    }
  }

  addNumber = (event) => {
    event.preventDefault()
    const personObject = {
      name: this.state.newName
    }

    const person = this.state.persons.concat(personObject)

    if(this.state.persons.some(x => x.name === personObject.name)) {
      alert("Person is already in the phonebook!")
    } else {
    this.setState({ 
      persons: person,
      newName: '' })
    }
  }

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addNumber}>
          <div>
            nimi: <input value={this.state.newName} onChange={this.handleNameChange} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        {this.state.persons.map(person => <Person key={person.name} name={person.name} />)}
      </div>
      
    )
  }
}


export default App
