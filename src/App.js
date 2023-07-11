import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/news'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export class App extends Component {
  pagesize = 15
  render() {
  
    return (
      
      <div>
        <Router>
          <Navbar />
          <Routes>

            <Route path="/" element={<News pageSize={this.pagesize} country='us' cat="general" />} />
            <Route path="/business" element={<News key="busness" pageSize={this.pagesize} country='us' cat="business" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={this.pagesize} country='us' cat="entertainment" />} />

            <Route path="/health" element={<News key="health" pageSize={this.pagesize} country='us' cat="health" />} />

            <Route path="/science" element={<News key="science" pageSize={this.pagesize} country='us' cat="science" />} />
            <Route path="/sports" element={<News key="sports" pageSize={this.pagesize} country='us' cat="sports" />} />

            <Route path="/technology" element={<News key="technology" pageSize={this.pagesize} country='us' cat="technology" />} />







          </Routes>
        </Router>



      </div>
    )
  }
}

export default App
