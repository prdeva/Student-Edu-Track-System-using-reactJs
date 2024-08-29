import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import Header from "./components/header";
import Content from "./components/content"
import './components/style.css'
class App extends React.Component {
  render() {
    return (
      <div className="tot"  style={{ backgroundColor: 'blue' }}>
        <Header />
        
        <Content />
      
        
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));