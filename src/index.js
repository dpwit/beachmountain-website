import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Main from './components/Main'
import './styles/main.css'

render(
  <BrowserRouter>
    <Main/>
  </BrowserRouter>,
  document.getElementById('root')
)
