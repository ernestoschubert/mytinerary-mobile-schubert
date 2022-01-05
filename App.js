import React from 'react';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from "./redux/reducers/rootReducer"
import thunk from "redux-thunk"
import Home from './screens/Home'

const App = () => {

  const reduxStore = createStore(rootReducer, applyMiddleware(thunk))

  return (
    <Provider store={reduxStore}>
      <Home />
    </Provider>
  )
}

export default App;
