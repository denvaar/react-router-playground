import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';


const Page = ({ color }) => (
  <div className="App">
    <header className={`App-header ${color}`}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
)

class SideNav extends React.Component {
  componentDidMount() {
    console.log('nav mounted')
  }

  render() {
    return (
      <nav>
        <ul className="nav">
          <li><NavLink to="/colors/charcoal">{'Charcoal'}</NavLink></li>
          <li><NavLink to="/colors/red">{'Red'}</NavLink></li>
          <li><NavLink to="/colors/blue">{'Blue'}</NavLink></li>
          <li><NavLink to="/colors/green">{'Green'}</NavLink></li>
        </ul>
      </nav>
    )
  }
}

const ColorPages = () => (
  <div>
    <Route path="/colors" component={SideNav} />
    <Switch>

      {['charcoal', 'red', 'blue', 'green'].map(color => (
        <Route
          key={color}
          exact
          path={`/colors/${color}`}
          render={() => <Page color={color} />}
        />
      ))}

      <Route path="/colors" render={() => <h2>{'Color not found!'}</h2>} />
    </Switch>
  </div>
)

const OtherPages = () => (
  <div>
    <Switch>
      <Route path="/other/a" render={() => <p>a</p>} />
      <Route path="/other/b" render={() => <p>b</p>} />
      <Route path="/other" render={() => <h2>{'Other not found!'}</h2>} />
    </Switch>
  </div>
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <h2>{'Hello!'}</h2>} />
          <Route path="/colors" component={ColorPages} />
          <Route path="/other" component={OtherPages} />
          <Route path="" render={() => <h2>{'Page not found!'}</h2>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
