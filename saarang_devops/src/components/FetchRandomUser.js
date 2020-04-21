import React from "react";
import '../skeleton.css';
import '../normalize.css';
export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    movie: null,
    tv: null,
    listofnames: null,
  };

  async componentDidMount() {
    const url = "https://saarang2021aspirers.herokuapp.com";
    const url1 = url + "/welcome"                             //endpoint1
    const response = await fetch(url1);
    const data = await response.json();
    this.setState({ movie: data.treasure });

    const url2 = url + data.endpoint;                          //endpoint2 from endpoint1
    const response1 = await fetch(url2);
    const data1 = await response1.json();
    this.setState({ tv: data1.treasure });

    const url3 = url + data1.endpoint;                        //endpoint3 from endpoint2
    const response2 = await fetch(url3);
    const data2 = await response2.json();
    const listing = data2.map(name=>{
      return (
        <div class="row">
        <div class="container">
        <div class="seven columns" style={{fontSize: 20, color: "black", backgroundColor: "#30C97D"}}>
        {name.name}
        </div>

        <div class="six columns" style={{fontSize: 14, color: "blue", backgroundColor: "#1DC5F2"}}>
        <div>..</div>
        {name.description}
        <div>..</div>
        </div>
        </div>
        </div>
        
        )
    });
    this.setState({listofnames: listing, loading: false});
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    return (
      <div>
        <div style={{fontSize: 20, color: "black", backgroundColor: "#F2DB1D"}}>{this.state.movie}</div>
        <div style={{fontSize: 20, color: "black", backgroundColor: "#C98CE2"}}>{this.state.tv}</div>
        <div><h2>Cards</h2></div>
        <div >{this.state.listofnames}</div>
      </div>
    );
  }
}