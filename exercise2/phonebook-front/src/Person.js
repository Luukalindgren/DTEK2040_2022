import React from "react"

//EN SAANUT FUNKTIOITA JOTKA MUOKKAAVAT STATEA ERI MODULIIN, JOTEN TÄMÄ JÄI TOSI TYHJÄKSI...

const Person = (props) => {
    return(
      <tr>
        <td>{props.name} </td>
        <td>{props.number} </td>
      </tr>
    )
  }

export default Person