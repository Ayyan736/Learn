import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count : 0 }
    }
   
    Increment(){
        this.setState({
            count : this.state.count + 1 
        })
    }
    Decrement(){
      this.setState({
        count : this.state.count - 1
      })
    }
    Reset(){
      this.setState({
        count : this.state.count * 0
      })
    }
  render() {
    return (
      <div className='main-div'>
        <h1 className='name'>Counter</h1>
          <h1 className='card'>{this.state.count}</h1><br></br>
          <button className='button-1' onClick={()=> this.Increment()}>Increment</button>

          <button className='button-2' onClick={() => this.Decrement()}>Decrement</button>

          <button className='button-3' onClick={()=> this.Reset()}>Reset</button>
      </div>
    )
  }
}

export default Counter