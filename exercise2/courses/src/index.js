import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => {
  return (
    <div><h1>{props.name}</h1></div>
  )
}

const Part = (props) => {
  return (
    <div><p>{props.content.name} {props.content.exercises}</p></div>
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
    <div><p>Total {sum} exercises</p></div>
  )
}

const App = () => {
  const course = {
    name: 'Superadvanced web and mobile programming',
    parts: [
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
}

  return (
    <div>
      <Header name={course.name} />
      <Contents parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


