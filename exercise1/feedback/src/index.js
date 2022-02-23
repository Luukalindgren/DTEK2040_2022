import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyvä: 0,
      neutraali: 0,
      huono: 0
    }
    this.kasvataYhdella = this.kasvataYhdella.bind(this)
  }

  kasvataYhdella(tyyppi) {
    if(tyyppi==="hyvä")this.setState({ hyvä: this.state.hyvä + 1 })
    if(tyyppi==="neutraali")this.setState({ neutraali: this.state.neutraali + 1 })
    if(tyyppi==="huono")this.setState({ huono: this.state.huono + 1 })
  }

  render() {
    return (
      <div>
        <h1>Anna palautetta:</h1>
        
        <div>
          <button onClick={() => this.kasvataYhdella("hyvä")}> Hyvä </button>
          <button onClick={() => this.kasvataYhdella("neutraali")}> Neutraali </button>
          <button onClick={() => this.kasvataYhdella("huono")}> Huono </button>
        </div>
        <h1>Statistiikka:</h1>
        <div>Hyvä {this.state.hyvä}</div>
        <div>Neutraali {this.state.neutraali}</div>
        <div>Huono {this.state.huono}</div>
      </div>
    )
  }
}
  

ReactDOM.render(
  <App />,
  document.getElementById('root')
);