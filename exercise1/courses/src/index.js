import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => {
  return (
    <div><h1>{props.course}</h1></div>
  )
}

const Part = (props) => {
  return (
    <div>{props.content.name} {props.content.exercises}</div>
  )

}

const Contents = (props) => {
  return (
    <div>
      <Part content={props.parts[0]}  />
      <Part content={props.parts[1]}  />
      <Part content={props.parts[2]}  />
    </div>
  )
}

const Total = (props) => {
  let sum = 0;
  for(const element of props.parts) sum += element.exercises;
  return (
    <div>Total {sum} exercises</div>
  )
}

const App = () => {
  const course = 'Superadvanced web and mobile programming'
  const parts = [
    {
      name: 'Basics of React',
      exercises: 8
    },
    {
      name: 'Using props',
      exercises: 10
    },
    {
      name: 'Component states',
      exercises: 12
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Contents parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


