import React from "react";

const CustomComponent = (props) => {
  return (
    <div>
      <input type="text" ref={props.inputRef} />
    </div>
  );
};

const Parent = (props) => {
  return <CustomComponent inputRef={props.inputRef} />;
};

class GrandParent extends React.Component {
  constructor(props) {
    super(props);
    this.nameRef = null;
  }

  callbackRef = (element) => {
    this.nameRef = element;
  };

  componentDidMount() {
    this.nameRef.focus();
    console.log(this.nameRef);
  }
  render() {
    return <Parent inputRef={this.callbackRef} />;
  }
}

export default GrandParent;
