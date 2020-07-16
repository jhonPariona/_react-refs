<h1 align="center">⚛️ Refs</h1>
<p align="center">
Poder hacer referencia de un elemento del DOM o de un componente de clase (class components porque tiene instancia)
</p>

[📖 Documentación](https://es.reactjs.org/docs/refs-and-the-dom.html) |
[🎬 Como usar react refs \_ Leo Medina](https://youtu.be/xLHDPSIDVyc?t=220) |

<p align="center">
<img src="https://user-images.githubusercontent.com/62570198/87606959-da333c00-c6c1-11ea-8faf-08b4f1e7a127.gif" alt="ref img"/>
</p>

## Se puede hacer uso para:

- Controlar focus, selección de textos o reproducción de medios
- Integracion con bibliotecas DOM de terceros

## Create ref

[📖 Documentación](https://es.reactjs.org/docs/refs-and-the-dom.html#creating-refs)

"React asignará a la propiedad current el elemento del DOM cuando el componente sea montado, y la asignará de nuevo null cuando sea desmontado. La referencia es actualizada antes de los métodos componentDidMount o componentDidUpdate"

> No puedes hacer uso de referencias de componentes de función debido a que no tienen instancias.

### [createRef a un elemento del DOM](https://github.com/jhonPariona/_react-refs/blob/fd2391fe7d6266559ecdd64100d6e95bb6d2b7c1/src/pages/classComponents/CreateRef.jsx#L13)

- El método createRef devuelve un objeto que en la clave current tiene la referencia al elemento DOM

```jsx
class CreateRef extends React.Component {
/* Crea una referencia(crea un objeto) para guardar el elemento textInput del DOM */
  inputRef = React.createRef();
...
```

- Pasamos la referencia en el atributo ref del elemento que queremos

```jsx
return (
  <>
    <input type="text" ref={this.inputRef} />
  </>
);
```

- Podemos usar esa referencia en cualquier lugar de la clase y para hacer referencia al elemento DOM debemos acceder a la clave curent

```jsx
class CreateRef extends React.Component {
  //...
  handleFocus = () => {
    if (this.inputRef) {
      console.log("Focus");
      /* Estamos accediendo la propiedad "current" para obtener el nodo del DOM */
      this.inputRef.current.focus();
    }
  };
  //...
  render() {
    return (
      <>
        <h2>
          {/* ... */}
          <input type="text" ref={this.inputRef} />
          <button onClick={this.handleFocus}>Focus</button>
        </h2>
      </>
    );
  }
}
```

### [createRef a un componente de clase](https://github.com/jhonPariona/_react-refs/blob/9c9dd7e6e1fa401f414575f9deaba074c692f4ec/src/pages/classComponents/components/CreateRefClassComponent.jsx#L11)

[📖 Documentación](https://es.reactjs.org/docs/refs-and-the-dom.html#adding-a-ref-to-a-class-component) |

Podemos hacer un ref a componentes de clase Personalizados y poder hacer uso de sus métodos en el padre.

- En el hijo tenemos el ref y el método que hacen focus

```jsx
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
          <input type="text" ref={this.inputRef} />
        </h2>
      </>
    );
  }
}
```

- Hacemos uso del método handleFocus en el padre para simular un click y que se haga focus al montar el componente

```jsx
class CreateRefClassComponent extends React.Component {
  /* Crea una referencia(crea un objeto) para guardar la instancia del componente de clase la cual nos permitirá acceder a sus métodos*/
  autofocusRef = React.createRef();

  componentDidMount() {
    /* Podemos tener acceso a sus métodos que estan almacenados en la propiedad current */
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
```


## [Callback ref](https://github.com/jhonPariona/_react-refs/blob/57b8daa031e1311c5995e8a0d267bd728a234000/src/pages/classComponents/CallbackRef.jsx#L43)

[📖 Documentación](https://es.reactjs.org/docs/refs-and-the-dom.html#callback-refs) |

React llamara al callback del ref con el elemento del DOM cuando el componente sea montado, y lo llamara con null cuando este se desmonte. Se asegura que las referencias serán actualizadas antes que el componentDidMount o el componentDidUpdate sean ejecutados.

- Pasamos una función al prop ref esta funcion recibirá al elemento como argumento

```jsx
return (
  <>
    <input type="text" ref={this.setInputTextRef} />
    <button onClick={this.handleFocus}>focus</button>
  </>
);
```

- almacenamos el elemento en una propiedad y podemos hacer uso de el en la clase

```jsx
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
  ...
}
```

## [String Ref](https://github.com/jhonPariona/_react-refs/blob/59c339a06c5e6a78fad3bd1dd7224781804ce886/src/pages/classComponents/StringRef.jsx#L30)

Se encuentra actualmente [deprecado](https://es.reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs) y no se debe de usar

**Solo funciona en class components**

- Agregamos una prop llamada ref con un string que viene a ser el nombre del ref que usaremos para acceder al elemento

```jsx
return (
  <>
    <input type="text" ref="nameRef" />
    <button onClick={this.handleFocus}>focus</button>
  </>
);
```

- Podemos hacer uso de métodos que existen en el elemento nativo

```jsx
handleFocus = () => {
  console.log("click in focus");
  console.log(this.refs.nameRef);
  this.refs.nameRef.focus();
};
```
