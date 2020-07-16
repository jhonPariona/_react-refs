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
    this.nameRef = React.createRef();
  }

  componentDidMount() {
    this.nameRef.current.focus();
    console.log(this.nameRef);
  }
  render() {
    return <Parent inputRef={this.nameRef} />;
  }
}

export default GrandParent;
