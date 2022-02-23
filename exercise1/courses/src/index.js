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
  const part1 = 'Basics of React'
  const exercises1 = 8
  const part2 = 'Using props'
  const exercises2 = 10
  const part3 = 'Component states'
  const exercises3 = 12

  return (
    <div>
      <Header course={course} />
      <Contents content1={part1} count1={exercises1} 
      content2={part2} count2={exercises2}
      content3={part3} count3={exercises3}/>
      <Total total={exercises1+exercises2+exercises3} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


