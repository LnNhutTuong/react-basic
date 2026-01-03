import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Ximen",
    age: 20,
    sex: "Mail",
  };

  handleClick(event) {
    console.log("My name is: ", this.state.name);
  }

  handleOnMouseOver(event) {
    console.log(event.pageX);
  }

  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name}, I'm {this.state.age} and sex is
        {this.state.sex}
        <br></br>
        <button onClick={this.handleClick}>click me</button>
        <button onMouseOver={this.handleOnMouseOver}>Move</button>
      </div>
    );
  }
}

export default MyComponent;
