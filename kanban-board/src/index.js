import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

ReactDOM.render(
  <>
    <Navbar/>

    <App />
    <Footer />
  </>,
  document.getElementById('root')
);