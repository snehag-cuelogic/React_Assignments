import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Courses from './containers/Courses/Courses';
// import Course  from './containers/Course/Course';
import Users from './containers/Users/Users';
import NoMatch from './components/NoMatch/NoMatch';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul style={{ listStyle: 'none', margin: 'auto', padding: '0' }}>
            <li style={{ margin: '10px', display: 'inline-block' }}>
              <NavLink to="/courses">Courses</NavLink>

            </li>
            <li style={{ margin: '10px', display: 'inline-block' }}>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/users" exact component={Users} />
          <Route path="/courses" component={Courses} />
          <Redirect from="/all-courses" to="/courses"></Redirect>
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
