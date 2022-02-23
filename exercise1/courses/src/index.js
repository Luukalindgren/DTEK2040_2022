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
    <div>{props.content} {props.count}</div>
    
  )

}

const Contents = (props) => {
  return (
    <div>
      <Part content={props.content1} count={props.count1} />
      <Part content={props.content2} count={props.count2} />
      <Part content={props.content3} count={props.count3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>Total {props.total} exercises</div>
  )
}

const App = () => {
  const course = 'Superadvanced web and mobile programming'
  const part1 = {
    name: 'Basics of React',
    exercises: 8
  }
  const part2 = {
    name: 'Using props',
    exercises: 10
  }
  const part3 = {
    name: 'Component states',
    exercises: 12
  }


  return (
    <div>
      <Header course={course} />
      <Contents content1={part1.name} count1={part1.exercises} 
      content2={part2.name} count2={part2.exercises}
      content3={part3.name} count3={part3.exercises}/>
      <Total total={part1.exercises+part2.exercises+part3.exercises} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


