import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      empty: true
    };
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  checkFormEntries = () => {
    if (this.state.name === '' || this.state.email === '' || this.state.message === '') {
      this.setState({empty:true}, ()=>{alert('You must fill all the fields')})
    } else {
      this.setState({empty:false}, ()=>{console.log('All entries filled')})
    }
  }

  handleSubmit = e => {
    this.checkFormEntries();
    if (!this.state.empty) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => {
          alert("Success!")
          this.setState({
            name: '',
            email: '',
            message: '',
            empty: true
          })
        })
        .catch(error => alert(error));
    }
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>
              Your name:<br />
            <input type="text" name="name" onChange={this.handleChange}/>
            </label>
          </p>
          <p>
            <label>
              Your email:<br />
              <input type="email" name="email" onChange={this.handleChange}/>
            </label>
          </p>
          <p>
            <label>
              Message:<br />
              <textarea name="message" onChange={this.handleChange}/>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}
