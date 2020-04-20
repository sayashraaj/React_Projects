import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    movie: null,
    tv: null,
    listofnames: null,
  };

  async componentDidMount() {
    const url = "https://saarang2021aspirers.herokuapp.com";
    const url1 = url + "/welcome"
    const response = await fetch(url1);
    const data = await response.json();
    this.setState({ movie: data.treasure, loading: false });

    const url2 = url + data.endpoint;
    const response1 = await fetch(url2);
    const data1 = await response1.json();
    this.setState({ tv: data1.treasure, loading: false });

    const url3 = url + data1.endpoint;
    const response2 = await fetch(url3);
    const data2 = await response2.json();
    const listing = data2;

      const todoItems = listing.map((l) =>
    <li key={l.name}>
    {l.description}
    </li>
);

    this.setState({listofnames: todoitems, loading: false});
    
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.movie) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        <div>{this.state.movie}</div>
        <div>{this.state.tv}</div>
        <div>{todoItems}</div>



      </div>
    );
  }
}