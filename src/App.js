import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import './App.css';

import CityWeatherList from './containers/CityWeatherList';

class App extends Component {
  render() {
    return (
        <Provider store={createStore(reducers)}>
          <CityWeatherList />
        </Provider>
    );
  }
}

export default App;
