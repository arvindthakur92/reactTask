import React from 'react';
import ReactDOM from 'react-dom/client';

//import { App } from './App.jsx'

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }
  render() {
    const { counter } = this.state;
    return (<>
    
   <span style={{color: 'white'}}>{counter}</span>
   <br/>
   <button onClick={()=> { this.setState({ counter: counter +1})}}>Increment</button> <br/>
   <button onClick={()=> { this.setState({ counter: counter - 1})}}>Decrement</button>
   </>
   );
  }
}
ReactDOM.createRoot( 
  document.querySelector('#root')
).render(<Counter />)
