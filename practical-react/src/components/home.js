import React from 'react';
import '../App.css';

export default class Form extends React.Component {

	state={
		name: "name",
		rollno: "roll number",
		phone: "phone",
		email: "email",
		password: "password",
		confirmpassword: "password"
	};

	handleChangename=event =>{
		console.log(event.target.value);
		this.setState({name: event.target.value});
	};

	handleChangerollno=event =>{
		console.log(event.target.value);
		this.setState({rollno: event.target.value});
	};

	handleChangephone=event =>{
		console.log(event.target.value);
		this.setState({phone: event.target.value});
	};

	handleChangeemail=event =>{
		console.log(event.target.value);
		this.setState({email: event.target.value});
	};

	handleChangepassword=event =>{
		console.log(event.target.value);
		this.setState({password: event.target.value});
	};

	handleChangeconfirmpassword=event =>{
		console.log(event.target.value);
		this.setState({confirmpassword: event.target.value});
	};

	handleSubmit=()=>{console.log(this.state);};

	render(){
		return(
			<div>
			<input value={this.state.name} onChange={this.handleChangename} />
			<input value={this.state.rollno} onChange={this.handleChangerollno} />
			<input value={this.state.phone} onChange={this.handleChangephone} />
			<input value={this.state.email} onChange={this.handleChangeemail} />
			<input value={this.state.password} onChange={this.handleChangepassword} />
			<input value={this.state.confirmpassword} onChange={this.handleChangeconfirmpassword} />
			<button onClick={this.handleSubmit}>Submit</button>
			</div>
			);
	}
}