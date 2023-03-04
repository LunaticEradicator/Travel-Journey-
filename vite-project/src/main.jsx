import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './Pages/Card'
import Nav from './Pages/Nav'
import './index.css'


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <>
    <Nav />
    <Card />
  </>
)