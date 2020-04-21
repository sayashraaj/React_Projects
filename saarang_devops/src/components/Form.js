import React from 'react';
import '../App.css';
import '../skeleton.css';
import '../normalize.css';

const initialState = {			//reset to initial
	name: "",
	rollno: "",
	phone: "",
	email: "",
	password: "",
	confirmpassword: "",
	phoneError: "",
	emailError: "",
	confirmpasswordError: ""
}
export default class Form extends React.Component {

	state=initialState;									//initialise state to empty initial state


	handleChangename=event =>{
		this.setState({name: event.target.value});
	};

	handleChangerollno=event =>{

		this.setState({rollno: event.target.value});
	};

	handleChangephone=event =>{

		this.setState({phone: event.target.value});
	};

	handleChangeemail=event =>{

		this.setState({email: event.target.value});
	};

	handleChangepassword=event =>{
		this.setState({password: event.target.value});
	};

	handleChangeconfirmpassword=event =>{

		this.setState({confirmpassword: event.target.value});
	};

	validate=()=>{
		let phoneError="";					//empty errors initialised
		let emailError="";
		let confirmpasswordError="";

		if(this.state.phone.length!==10) {		//count number of digits
			phoneError="phone number must have 10 digits";
		}
		if(phoneError) {
			this.setState({phoneError});
		}

		if(!this.state.email.includes('@smail.iitm.ac.in')) {
			emailError="invalid smail";
		}
		if(emailError) {
			this.setState({emailError});			//sets emailerror to invalid smail, else empty
		}


		if(this.state.password!==this.state.confirmpassword) {
			confirmpasswordError="password does not match";

		}
		if(confirmpasswordError) {
			this.setState({confirmpasswordError});
		}
		if(!this.state.password.length) {						//if no password entered
			confirmpasswordError=" no password entered";
			this.setState({confirmpasswordError});
		}

		if(emailError || phoneError || confirmpasswordError) {
			return false;
		}

		return true;
	};


	handleSubmit=()=>{
		const isValid=this.validate();
		if(isValid){
			console.log(this.state);
			//clear form
			this.setState(initialState);
			this.props.history.push('/FetchRandomUser');			//redirect to next task
		}

	};


	render(){
		return(
			
			<div>
			<div style={{backgroundColor: "#C95CE9"}}><input name="name" placeholder="Name" value={this.state.name} onChange={this.handleChangename} /></div>
			<div style={{backgroundColor: "#C96CE9"}}><input name="rollno" placeholder="Roll Number" value={this.state.rollno} onChange={this.handleChangerollno} /></div>
			<div style={{backgroundColor: "#C97CE9"}}><input name="phone" placeholder="Phone No" value={this.state.phone} onChange={this.handleChangephone} /></div>
			<div style={{fontSize: 12, color: "red"}}> {this.state.phoneError}</div>
			<div style={{backgroundColor: "#C98CE9"}}><input name="email" placeholder="Email Id" value={this.state.email} onChange={this.handleChangeemail} /></div>
			<div style={{fontSize: 12, color: "red"}}> {this.state.emailError}</div>
			<div style={{backgroundColor: "#C98CE1"}}><input name="password" placeholder="Password" type="password" value={this.state.password} onChange={this.handleChangepassword} /></div>
			<div style={{backgroundColor: "#C99CE3"}}><input name="confirmpassword" placeholder="Confirmpassword" type="password" value={this.state.confirmpassword} onChange={this.handleChangeconfirmpassword} /></div>
			<div style={{fontSize: 12, color: "red"}}> {this.state.confirmpasswordError}</div>
			<div><button class="button-primary" onClick={this.handleSubmit}>Submit</button></div>
			</div>
			);
	}
}