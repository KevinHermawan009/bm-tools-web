import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./views/Home";
import { Outlet } from 'react-router-dom';
import { Dashboard } from "./views/Dashboard";
import { Sidebar } from "./components/sideMenu/Sidebar";
import React, { useEffect, useState } from "react";
import Dummy from "./views/Dummy";
const SidebarLayout = () => (
  <>
    <Sidebar />
    <Outlet />
  </>
);
class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      long: null,
      auth: true,
    };
  }
  
  render() {
    // GELOCATION==========
    // window.navigator.geolocation.getCurrentPosition(
    //   (position) =>
    //     this.setState({
    //       lat: position.coords.accuracy,
    //       long: position.coords.longitude,
    //     }),
    //   (err) => console.log("Err", err)
    // );

    return (
      <BrowserRouter>
        {/* {this.state.auth === true ? <Sidebar /> : null} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  element={<Dashboard />} />
          <Route path="/Sidebar/Dashboard/" element={<SidebarLayout/>}>
            {/* <Route index element={<Home/>} /> */}
            <Route path="/Sidebar/Dashboard/Dummy" element={<Dummy/>} />
            <Route path="/Sidebar/Dashboard/DummyShit" element={<Dummy/>} />
          </Route>
          {/* <Route path="/Sidebar/Dashboard/Dummy" element={<Dummy/>} /> */}
    
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
