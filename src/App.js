import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import Message from './components/Message';
import Output from './components/Output';
import Loader from './components/Loader';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foodInput: '',
      output: [],
      isLoaded: true,
      errorMessage: ''
    }
  }

  validate = () => {
    let foodQuery = this.state.foodInput;
    const regex = /^[A-Z]+$/i;
    let regexResult = regex.test(foodQuery);

    if(!this.state.foodInput) {
      this.setState({
        errorMessage: 'Please enter a query',
        isLoaded: true,
      });
      return false;
    }

    if(regexResult === false) {
      this.setState({
        errorMessage: 'Please enter alphabetical characters only',
        isLoaded: true,
      });
      return false;
    }

    return true;
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
    this.setState({
      isLoaded: false,
      errorMessage: '',
      output: []
    });

    const isValid = this.validate();

    if(isValid) {
      fetch(`https://api.punkapi.com/v2/beers?food=${foodQuery}`)
      .then(
        res => {
          return res.json();
        })
        .then(
          data => {
            if(data.length === 0) {
              this.setState({errorMessage: 'No matches found'});
            }
            this.setState({
              output: data,
              isLoaded: true
            })
          }
        )
      .catch(
        error => console.log(error)
      )
    }
  }

  render() {
    let loading = this.state.isLoaded ? <Output output={this.state.output} /> : <Loader />
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-10 offset-sm-1">
              <Header />
              <Input handleChange={this.onHandleChange} handleSubmit={this.onSubmit} />
            </div>
          </div>
          {loading}
          <Message errorMessage={this.state.errorMessage} />
          
        </div>
      </div>
    );
  }
}

export default App;
