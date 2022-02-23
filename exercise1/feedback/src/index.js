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
  }

  kasvataYhdella = (tyyppi) => {
    if(tyyppi==="hyvä")this.setState({ hyvä: this.state.hyvä + 1 })
    if(tyyppi==="neutraali")this.setState({ neutraali: this.state.neutraali + 1 })
    if(tyyppi==="huono")this.setState({ huono: this.state.huono + 1 })
  }

  //hyvä = 1, neutraali = 0 ja huono = -1
  keskiarvo = () => {
    if(this.state.hyvä === 0 & this.state.neutraali === 0 & this.state.huono === 0) return "0";
    let sum = this.state.hyvä-this.state.huono;
    let maara = this.state.hyvä + this.state.neutraali + this.state.huono;
    return (sum/maara).toFixed(1);
  }

  //Neutraalit (=0) ei ole positiivisia
  positiivisia = () => {
    if(this.state.hyvä === 0 & this.state.neutraali === 0 & this.state.huono === 0) return "0";
    let posit = this.state.hyvä;
    let maara = this.state.hyvä + this.state.neutraali + this.state.huono;
    return (posit/maara*100).toFixed(1);
  }

  render() {
    return (
      <div>
        <div>
          <h1>Anna palautetta:</h1>
          <button onClick={() => this.kasvataYhdella("hyvä")}> Hyvä </button>
          <button onClick={() => this.kasvataYhdella("neutraali")}> Neutraali </button>
          <button onClick={() => this.kasvataYhdella("huono")}> Huono </button>
        </div>
        <div>
          <h1>Statistiikka:</h1>
          <p>Hyvä {this.state.hyvä}</p>
          <p>Neutraali {this.state.neutraali}</p>
          <p>Huono {this.state.huono}</p>
          <p>Keskiarvo {this.keskiarvo()}</p>
          <p>Positiivisia {this.positiivisia()}%</p>
        </div>
      </div>
    )
  }
}
  

ReactDOM.render(
  <App />,
  document.getElementById('root')
);