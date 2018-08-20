import React, { Component } from 'react';
import './App.css';
import UserInput from './UserComponents/UserInput';
import UserOutput from './UserComponents/UserOutput';

class App extends Component {

  state = {
    UserOutput:[
     { name: 'Sneha',
    },
     
    ]
  }
  changeHandler =(event)=>{
    this.setState({
      UserOutput:[
        {
          name:event.target.value,
        }
      ]
    })
  }


  render() {
    return (
      <div className="App">
       <p> Udemy first assignment</p>
       <UserInput changeHandler={this.changeHandler} name={this.state.UserOutput[0].name}></UserInput>

       <UserOutput name={this.state.UserOutput[0].name}>
       And this is Udemy assignment done by {this.state.UserOutput[0].name}
       </UserOutput>
      </div>
    );
  }
}

export default App;
