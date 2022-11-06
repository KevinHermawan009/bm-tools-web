import "./App.css";
import { Routes, Route} from "react-router-dom";
import { Home } from "./views/Home";
import React from "react";

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    lat: null,
    long: null
  };
}
render() {
  // GELOCATION==========
  window.navigator.geolocation.getCurrentPosition(
    position => this.setState({
      lat: position.coords.accuracy,
      long: position.coords.longitude
    }),
    err => console.log('Err', err)
  );
  return (
    <main className='App'>
      <Routes className='App'>
        <Route path="/" element={<Home />} />
      </Routes>
    </main >


  );
}
};
export default App;
