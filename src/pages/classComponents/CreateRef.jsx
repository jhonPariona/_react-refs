import React from "react";

const Emoji = ({ emoji }) => {
  return (
    <span role="img" aria-label="elefant">
      {emoji}
    </span>
  );
};

class CreateRef extends React.Component {
  /* Crea una referencia(crea un objeto) para guardar el elemento textInput del DOM */
  inputRef = React.createRef();

  handleFocus = () => {
    if (this.inputRef) {
      console.log("Focus");
      /* Estamos accediendo la propiedad "current" para obtener el nodo del DOM */
      this.inputRef.current.focus();
    }
  };
  handleBlur = () => {
    if (this.inputRef) {
      console.log("Blur");
      this.inputRef.current.blur();
    }
  };
  handleValue = () => {
    if (this.inputRef) {
      console.log("Value");
      console.log(this.inputRef.current.value);
      console.log(this.inputRef);
    }
  };

  render() {
    return (
      <>
        <h2>
          Create Ref <Emoji emoji="🐘" />
          {/* Agregando una referencia a un elemento del DOM */}
          <input type="text" ref={this.inputRef} />
          <button onClick={this.handleFocus}>Focus</button>
          <button onClick={this.handleBlur}>Blur</button>
          <button onClick={this.handleValue}>Value</button>
        </h2>
      </>
    );
  }
}

export default CreateRef;
