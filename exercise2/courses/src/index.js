import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Contents = (props) => {
  return (
    <div>
      {props.parts.map(content => 
        <Part key={content.id} content={content} />)}
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.content.name} {props.content.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  let sum = 0;
  for(const element of props.parts) sum += element.exercises;
  return (
    <div>
      <p>Total: {sum}</p>
    </div>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header name={props.course.name}/>
      <Contents parts={props.course.parts} />
      <Total parts={props.course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Superadvanced web and mobile programming',
    parts: [
      {
        name: 'Basics of React',
        exercises: 8,
        id: 1
      },
      {
        name: 'Using props',
        exercises: 10,
        id: 2
      },
      {
        name: 'Component states',
        exercises: 12,
        id: 3
      }
  ]
}

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


