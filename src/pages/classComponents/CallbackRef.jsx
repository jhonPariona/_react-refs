import React from "react";

const Emoji = () => (
  <span role="img" aria-label="rocket">
    🚀
  </span>
);

class CallbackRef extends React.Component {
  inputText = null;

  /* Esta funcion recibe como parámetro el elemento del DOM y podemos asignarlo a una  propiedad*/
  setInputTextRef = (element) => {
    this.inputText = element;
  };

  handleFocus = () => {
    /* comprobamos que el elemento este montado en el DOM */
    if (this.inputText) {
      console.log("focus");
      this.inputText.focus();
    }
  };
  handleBlur = () => {
    if (this.inputText) {
      console.log("Blur");
      this.inputText.blur();
    }
  };
  handleValue = () => {
    if (this.inputText) {
      console.log("Value");
      console.log(this.inputText.value);
    }
  };
  render() {
    return (
      <>
        <h2>
          Callbacks Refs <Emoji />
        </h2>
        {/* En el atributo ref pasamos una property inicializer */}
        <input type="text" ref={this.setInputTextRef} />

        <button onClick={this.handleFocus}>focus</button>
        <button onClick={this.handleBlur}>Blur</button>
        <button onClick={this.handleValue}>value</button>
      </>
    );
  }
}

export default CallbackRef;
