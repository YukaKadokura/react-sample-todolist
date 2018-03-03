import React from "react";

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.title} onChange={this.handleChange} />
        <input type="submit" value="Add to todo list" />
      </form>
    );
  }

  handleChange = event => {
    const value = event.target.value;
    this.setState({ title: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
}
