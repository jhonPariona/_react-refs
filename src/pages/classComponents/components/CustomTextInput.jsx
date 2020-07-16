import React from "react";

const Emoji = ({ emoji }) => {
  return (
    <span role="img" aria-label="elefant">
      {emoji}
    </span>
  );
};

class CustomTextInput extends React.Component {
  /* Crea una referencia(crea un objeto) para guardar el elemento textInput del DOM */
  inputRef = React.createRef();

  handleFocus = () => {
    if (this.inputRef) {
      console.log("Focus");
      /* Estamos accediendo la propiedad "current" para obtener el nodo del DOM */
      this.inputRef.current.focus();
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
        </h2>
      </>
    );
  }
}

export default CustomTextInput;
