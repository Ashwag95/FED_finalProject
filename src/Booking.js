import React from "react";
import "./booking.css";
import Navbar from "./Navbar";
import Footer from "./Footer";


class Booking extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm =
      this.submituserRegistrationForm.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["username"] = "";
       fields["lastname"] = "";
      fields["emailid"] = "";
      fields["mobileno"] = "";
     
      this.setState({ fields: fields });
      alert("Form submitted");
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your First name.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }
    if (!fields["lastname"]) {
      formIsValid = false;
      errors["lastname"] = "*Please enter your last name.";
    }

    if (typeof fields["lastname"] !== "undefined") {
      if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lastname"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }

  

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }
  


  render() {
    return (
      <>
        <header>
          <Navbar />
        </header>
        <main>
       
          <div id="main-registration-container">
            <div id="register">
              <h1> Reservation Details</h1>
              <form
                method="post"
                name="userRegistrationForm"
                onSubmit={this.submituserRegistrationForm}
              >
                <label>First Name:</label>
                <input
                  type="text"
                  name="username"
                  value={this.state.fields.username}
                  onChange={this.handleChange}
                />
                <div className="errorMsg">{this.state.errors.username}</div>
                <label>Last Name:</label>
                <input
                  type="text"
                  name="lastname"
                  value={this.state.fields.lastname}
                  onChange={this.handleChange}
                />
                <div className="errorMsg">{this.state.errors.lastname}</div>
                <label>Email ID:</label>
                <input
                  type="text"
                  name="emailid"
                  value={this.state.fields.emailid}
                  onChange={this.handleChange}
                />
                <div className="errorMsg">{this.state.errors.emailid}</div>
                <label>Mobile No:</label>
                <input
                  type="text"
                  name="mobileno"
                  value={this.state.fields.mobileno}
                  onChange={this.handleChange}
                />
                <div className="errorMsg">{this.state.errors.mobileno}</div>
               
                <div class="form-group">
                  <label>Table for:</label>

                  <select name="table" class="select_table">
                    <option value=" ">1</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                  </select>
                  <label for="res-time">Choose time:</label>
   <select id="res-time ">
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
                <label>Date:</label>  <input type="date" required></input>
                <label for="occasion">Occasion:</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
                </div>
                <input type="submit" className="button" value="Confirm" />
              </form>
            </div>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    );
  }
}

export default Booking;
