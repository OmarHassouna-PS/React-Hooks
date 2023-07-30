import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import UseState from './Hooks/UseState'
import UseEffect from './Hooks/UseEffect'
import UseRef from './Hooks/UseRef'
import UseReducer from './Hooks/UseReducer'

export default function App() {
  return (


    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/useState" element={<UseState />} />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/useReducer" element={<UseReducer />} />
      </Routes>
    </BrowserRouter>
  )
}

const Nav = () => {
  return (
    <nav>
      <ul dir="rtl">
        <li>
          <Link to="/useState" >useState</Link>
        </li>
        <li>
          <Link to="/useEffect" >useEffect</Link>
        </li>
        <li>
          <Link to="/useRef" >useRef</Link>
        </li>
        <li>
          <Link to="/useReducer" >useReducer</Link>
        </li>
      </ul>
    </nav>
  )
}