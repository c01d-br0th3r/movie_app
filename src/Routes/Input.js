import React from "react";

class PhoneForm extends React.Component {
  state = {
    name: "",
    phone: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.props);
    this.props.onCreate(this.state);
    this.setState({ name: "", phone: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Input your name"
            onChange={this.handleChange}
            name="name"
          ></input>
          <input
            type="text"
            placeholder="Input your Phone Number"
            onChange={this.handleChange}
            name="phone"
          ></input>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

class Input extends React.Component {
  handleCreate = data => {
    console.log(data);
  };

  render() {
    return <PhoneForm onCreate={this.handleCreate} />;
  }
}

export default Input;
