import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Input from './Input';
import Message from './Message';
import Output from './Output';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foodInput: '',
      output: []
    }
  }

  onHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value)
  }
  
  onSubmit = (e) => {
    e.preventDefault();
  
    let foodQuery = this.state.foodInput;

    fetch(`https://api.punkapi.com/v2/beers?food=${foodQuery}`)
    .then(
      res => {
        return res.json();
      })
      .then(
        data => {
          this.setState({
            output: data
          })
        }
      )
    .catch(
      error => console.log(error)
    )
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-10 offset-sm-1">
              <Header />
              <Input handleChange={this.onHandleChange} handleSubmit={this.onSubmit} />
            </div>
          </div>
        
          <Message />
          <Output output={this.state.output} />
        </div>
      </div>
    );
  }
}

export default App;
