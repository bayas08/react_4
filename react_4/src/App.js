import React from "react";


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      pass: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value})
  }
  handlePasswordChange(event) {
    this.setState({pass: event.target.value})
  }
  handleSubmit(event) {
    alert("your name: " + this.state.value + " your password: " + this.state.pass);
    event.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({value: "", pass: ""});
  }

  render() {
    return (
        <div className="nameText">
          <form onSubmit={this.handleSubmit}>
            <div className="text">
              <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
              />
            </div>
            <div className="password">
              <input
                  value={this.state.pass}
                  onChange={this.handlePasswordChange}
                  type="password"
              />
            </div>
            <div className="submit">
              <button  type="submit" className='btn'>Войти</button>
            </div>
          </form>
        </div>

    );
  }
}

export default Form;