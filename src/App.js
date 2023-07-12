import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/news";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  pagesize = 15;
  apiKey = "fc4524215a4d46da8f00d7a2bfb3d968";
  state = { progress: 0 };

  setProgress = (prog) => {
    this.setState({ progress: prog });
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={this.pagesize}
                  key="gemeral"
                  country="us"
                  cat="general"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  key="busness"
                  apiKey={this.apiKey}
                  pageSize={this.pagesize}
                  country="us"
                  cat="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="entertainment"
                  apiKey={this.apiKey}
                  pageSize={this.pagesize}
                  country="us"
                  cat="entertainment"
                />
              }
            />

            <Route
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  key="health"
                  apiKey={this.apiKey}
                  pageSize={this.pagesize}
                  country="us"
                  cat="health"
                />
              }
            />

            <Route
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key="science"
                  apiKey={this.apiKey}
                  pageSize={this.pagesize}
                  country="us"
                  cat="science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key="sports"
                  apiKey={this.apiKey}
                  pageSize={this.pagesize}
                  country="us"
                  cat="sports"
                />
              }
            />

            <Route
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key="technology"
                  apiKey={this.apiKey}
                  pageSize={this.pagesize}
                  country="us"
                  cat="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
