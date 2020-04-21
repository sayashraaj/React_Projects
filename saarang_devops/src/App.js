import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import FetchRandomUser from "./components/FetchRandomUser";
import Form from "./components/Form";
class App extends React.Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
      Saarang DevOps App: Sayash Raaj CE19B113
      	<BrowserRouter>
		<Route path="/" component={Form} exact/>
       	<Route path="/FetchRandomUser" component={FetchRandomUser}/>
       	</BrowserRouter>
      </div>
    );
  }
}

export default App;