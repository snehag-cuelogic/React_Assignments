import React, { Component } from 'react';
import './App.css';
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {

  state = {
    something: '',
    stringLength: ''
  }

  changeHandler = (event) => {

    this.setState({
      something: event.target.value,
      stringLength: event.target.length
    });
  }

  //to delete the character
  onDeleteHandler = (index) => {
    const text = this.state.something.split('');
    text.splice(index,1);
    const updatedString = text.join('');
    this.setState({
      something:updatedString
    });
  }

  render() {

    let charList = null; 
    charList= this.state.something.split('').map((char, index) => {
      return <Char 
      inputString={char} 
      key={index}  
      click={this.onDeleteHandler(index)} />;
    });

    return (
      <div className="App">
        <p>Udemy Second Assignment</p>
        <input type="text" placeholder="Enter a string.." onChange={this.changeHandler} />
        <p>{this.state.something}</p>
        <Validation stringLen={this.state.something.length} />
        {charList}
      </div>
    );
  }
}

export default App;
