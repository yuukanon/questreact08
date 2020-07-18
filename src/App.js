import './App.css';
import React, { Component } from 'react';
import Quotecard from './Components/Quotecard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      data: null,
    }
  }  

  componentDidMount() {
    this.fetchData()
  }
  
  fetchData = () => {
    fetch('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(res => res.json())
    .then(data => this.setState({ 
      data, 
    }))
  }

  render() {
    // console.log(this.state)
    return(
     <div>
        {this.state.data ? (<Quotecard quote={this.state.data} />): (<p>Loading</p>)}
        <button onClick={this.fetchData} type='button'>Simpson's Quote</button>
     </div>
    )
  }
}

export default App;
