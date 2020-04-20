import React from 'react';
import './App.css';
// import FetchRandomUser from "./components/FetchRandomUser";
import Form from "./components/Form";
class App extends React.Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        Forme
        <Form />
      </div>
    );
  }
}

export default App;