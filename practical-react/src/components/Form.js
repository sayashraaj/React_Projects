import React from 'react';
import '../App.css';

const initialState = {			//reset to initial
	name: "",
	rollno: "",
	phone: "",
	email: "",
	password: "",
	confirmpassword: ""
}
export default class Form extends React.Component {

	state=initialState;


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

	validate=()=>{
		let phoneError="";					//empty errors initialised
		let emailError="";
		let confirmpasswordError="";

		if(this.state.phone.length!==10) {
			phoneError="10 digit";
		}
		if(phoneError) {
			this.setState({phoneError});
			return false;

		if(!this.state.email.includes('@smail.iitm.ac.in')) {
			emailError="invalid smail";
		}
		if(emailError) {
			this.setState({emailError});			//sets emailerror to invalid smail, else empty
			return false;
		}

		
		}

		return true;
	};


	handleSubmit=()=>{
		const isValid=this.validate();
		if(isValid){
			console.log(this.state);
			//clear form
			this.setState(initialState);
		}
	};


	render(){
		return(
			<div>
			<div><input name="name" placeholder="name" value={this.state.name} onChange={this.handleChangename} /></div>
			<div><input name="rollno" placeholder="roll number" value={this.state.rollno} onChange={this.handleChangerollno} /></div>
			<div><input name="phone" placeholder="phone no" value={this.state.phone} onChange={this.handleChangephone} /></div>
			<div style={{fontSize: 12, color: "red"}}> {this.state.phoneError}</div>
			<div><input name="email" placeholder="email id" value={this.state.email} onChange={this.handleChangeemail} /></div>
			<div style={{fontSize: 12, color: "red"}}> {this.state.emailError}</div>
			<div><input name="password" placeholder="password" type="password" value={this.state.password} onChange={this.handleChangepassword} /></div>
			<div><input name="confirmpassword" placeholder="confirmpassword" value={this.state.confirmpassword} onChange={this.handleChangeconfirmpassword} /></div>
			<div><button onClick={this.handleSubmit}>Submit</button></div>
			</div>
			);
	}
}