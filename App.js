import React from 'react';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from "./redux/reducers/rootReducer"
import thunk from "redux-thunk"
import Cities from './screens/Cities'

const App = () => {

  const reduxStore = createStore(rootReducer, applyMiddleware(thunk))

  return (
    <Provider store={reduxStore}>
      <Cities />
    </Provider>
  )
}

export default App;
