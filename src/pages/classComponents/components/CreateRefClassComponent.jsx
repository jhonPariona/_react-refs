import React from "react";

import CustomTextInput from "./CustomTextInput";

class CreateRefClassComponent extends React.Component {
  /* Crea una referencia(crea un objeto) para guardar la instancia del componente de clase*/
  autofocusRef = React.createRef();

  componentDidMount() {
    /* Podemos tener acceso a sus métodos */
    this.autofocusRef.current.handleFocus();
  }

  render() {
    return (
      <>
        <CustomTextInput />
        <CustomTextInput ref={this.autofocusRef} />
      </>
    );
  }
}

export default CreateRefClassComponent;
