import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import './contact.scss'

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
    if (this.state.name === '' || this.state.email === '' || this.state.message === '') {
      this.setState({empty:true})
    } else {
      this.setState({empty:false})
    }
  }

  handleSubmit = e => {
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
        <p
          style={{
            display:'flex',
            justifyContent:'center',
            fontSize:'16px',
            color:'red',
            marginBottom:8
          }}
        >
          (All fields are required)
        </p>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
          style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            marginBottom:0
          }}
        >
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>
              Your name:<br />
            <input
              type="text" name="name"
              onChange={this.handleChange}
              value={this.state.name}
              style={{
                width:300
              }}
            />
            </label>
          </p>
          <p>
            <label>
              Your email:<br />
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
                style={{
                  width:300
                }}
              />
            </label>
          </p>
          <p>
            <label>
              Message:<br />
              <textarea name="message"
                onChange={this.handleChange}
                value={this.state.message}
                style={{
                  width:300,
                  height:200
                }}
              />
            </label>
          </p>
          <p>
            <button
              type="submit"
              className="form-button"
            >
              Submit
            </button>
          </p>
        </form>
      </div>
    );
  }
}
