import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Form />
      </div>
    </BrowserRouter>
  );
}

export default App;
