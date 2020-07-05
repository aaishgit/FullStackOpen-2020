import React from 'react';
import ReactDOM from 'react-dom';


const Hello = (props) => {
  return (
  <div>
    <p>Hello my name is {props.name} and age is {props.age}
    </p>
  </div>
  )
}

const App = () => 
  {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello name="Aaish" age={20+4} />
      <Hello name="Blah" />
    </div>
  )
  };

ReactDOM.render(<App />,document.getElementById('root'))
