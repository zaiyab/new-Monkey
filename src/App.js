import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/news'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>

            <Route path="/" element={<News pageSize={9} country='us' cat="general" />} />
            <Route path="/business" element={<News key="busness" pageSize={9} country='us' cat="business" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={9} country='us' cat="entertainment" />} />

            <Route path="/health" element={<News key="health" pageSize={9} country='us' cat="health" />} />

            <Route path="/science" element={<News key="science" pageSize={9} country='us' cat="science" />} />
            <Route path="/sports" element={<News key="sports" pageSize={9} country='us' cat="sports" />} />

            <Route path="/technology" element={<News key="technology" pageSize={9} country='us' cat="technology" />} />







          </Routes>
        </Router>



      </div>
    )
  }
}

export default App
