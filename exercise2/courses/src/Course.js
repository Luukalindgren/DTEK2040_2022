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

export default Course