import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/news'



export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={20} />
      </div>
    )
  }
}

export default App
