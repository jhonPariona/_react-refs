import React from "react";

const Emoji = () => (
  <span role="img" aria-label="rocket">
    🚀
  </span>
);

class StringRef extends React.Component {
  handleFocus = () => {
    console.log("click in focus");
    console.log(this.refs.nameRef);
    this.refs.nameRef.focus();
  };
  handleBlur = () => {
    console.log("click in blur");
    console.log(this.refs.nameRef);
    this.refs.nameRef.blur();
  };
  handleValue = () => {
    console.log("click in value");
    console.log(this.refs.nameRef.value);
  };
  render() {
    return (
      <>
        <h2>
          String Refs <Emoji />
        </h2>
        <input type="text" ref="nameRef" />
        <button onClick={this.handleFocus}>focus</button>
        <button onClick={this.handleBlur}>blur</button>
        <button onClick={this.handleValue}>Value</button>
      </>
    );
  }
}
export default StringRef;
