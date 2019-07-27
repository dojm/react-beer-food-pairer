import React from 'react';
import './App.css';
import Input from './Input';
import Message from './Message';
import Output from './Output';

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-10 offset-sm-1">
            <Input />
          </div>
          <Message />
          <Output />
        </div>
      </div>
    </div>
  );
}

export default App;
