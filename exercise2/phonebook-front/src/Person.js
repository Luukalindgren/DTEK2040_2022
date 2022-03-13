import React from "react"

//EN SAANUT FUNKTIOITA JOTKA MUOKKAAVAT STATEA ERI MODULIIN, JOTEN TÄMÄ JÄI TOSI TYHJÄKSI...


class Person extends React.Component {
  render() {
    return(
      <tr>
        <td>{this.props.name} </td>
        <td>{this.props.number} </td>
        <td><button onClick={this.props.handleClick}>poista</button></td>
      </tr>
    )
}
}

export default Person