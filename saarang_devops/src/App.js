import React from 'react';
import './App.css';
import './skeleton.css';
import './normalize.css';
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
      <h3> Saarang DevOps App: <a>Sayash Raaj CE19B113 </a></h3>
      	<BrowserRouter>
		<Route path="/" component={Form} exact/>
       	<Route path="/FetchRandomUser" component={FetchRandomUser}/>
       	</BrowserRouter>
      </div>
    );
  }
}

export default App;