import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = (props) => {
  //Tarkistaa onko annettu palautetta
  if(props.hyvä === 0 && props.neutraali === 0 && props.huono === 0) return <div>Ei yhtään palautetta</div>
  
  //Neutraalit (=0) ei ole positiivisia
  let positiiviset = (props.hyvä/(props.hyvä + props.neutraali + props.huono)*100);

  //hyvä = 1, neutraali = 0 ja huono = -1
  let keskiarvo = (props.hyvä-props.huono)/(props.hyvä + props.neutraali + props.huono);

  return (
    <div>
      <Statistic text="Hyvä" arvo={props.hyvä} > </Statistic>
      <Statistic text="Neutraali" arvo={props.neutraali} />
      <Statistic text="Huono" arvo={props.huono} />
      <Statistic text="Keskiarvo" arvo={keskiarvo.toFixed(1)}/>
      <Statistic text="Positiivisia" arvo={positiiviset.toFixed(1)} merkki="%"/>
    </div>
  )
}

const Statistic = (props) => {
  return (
    <p>{props.text} {props.arvo} {props.merkki}</p>
  )
}

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
    if(tyyppi==="neutraali")this.setState({ neutraali:this.state.neutraali + 1 })
    if(tyyppi==="huono")this.setState({ huono: this.state.huono + 1 })
  }

  render() {
    return (
      <div>
        <h1>Anna palautetta:</h1>
        <Button handleClick={() => this.kasvataYhdella("hyvä")} text="Hyvä"/>
        <Button handleClick={() => this.kasvataYhdella("neutraali")} text="Neutraali"/>
        <Button handleClick={() => this.kasvataYhdella("huono")} text="Huono"/>
        <div>
          <h1>Statistiikka:</h1>
          <Statistics hyvä={this.state.hyvä} neutraali={this.state.neutraali} huono={this.state.huono}/>
        </div>
      </div>
    )
  }
}
  

ReactDOM.render(
  <App />,
  document.getElementById('root')
);