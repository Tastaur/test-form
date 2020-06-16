import React from 'react'
import './App.css'
import {Provider} from 'react-redux'
import store from './Redux/store'
import Header from './Component/Header/Header'
import InputSection from './Component/InputSection/InputSection'

const App = () => {
  return (
      <div className="App">
        <Header/>
        <InputSection/>
      </div>
  )
}

const TestApp = (props) => {
  return <Provider store={store}>
    <App/>
  </Provider>
}

export default TestApp
