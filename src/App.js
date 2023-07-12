import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/news";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App =()=>{
 const pagesize = 15;
  const apikey = "fc4524215a4d46da8f00d7a2bfb3d968";
  const [progress,setprogress] = useState(0)

   const setProgress = (prog) => {
    setprogress(prog)
  };

 
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" progress={progress} />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apikey}
                  pageSize={pagesize}
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
                  setProgress={setProgress}
                  key="busness"
                  apiKey={apikey}
                  pageSize={pagesize}
                  country="us"
                  cat="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  key="entertainment"
                  apiKey={apikey}
                  pageSize={pagesize}
                  country="us"
                  cat="entertainment"
                />
              }
            />

            <Route
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  key="health"
                  apiKey={apikey}
                  pageSize={pagesize}
                  country="us"
                  cat="health"
                />
              }
            />

            <Route
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  key="science"
                  apiKey={apikey}
                  pageSize={pagesize}
                  country="us"
                  cat="science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  key="sports"
                  apiKey={apikey}
                  pageSize={pagesize}
                  country="us"
                  cat="sports"
                />
              }
            />

            <Route
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  key="technology"
                  apiKey={apikey}
                  pageSize={pagesize}
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


export default App;
