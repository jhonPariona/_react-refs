<h1 align="center">⚛️ Refs</h1>
<p align="center">
Poder acceder a los elementos en el DOM real
</p>

[📖 Documentación](https://es.reactjs.org/docs/refs-and-the-dom.html) |
[🎬 Como usar react refs _ Leo Medina](https://youtu.be/xLHDPSIDVyc?t=220) |

<p align="center">
<img src="https://user-images.githubusercontent.com/62570198/87606959-da333c00-c6c1-11ea-8faf-08b4f1e7a127.gif" alt="ref img"/>
</p>

## Callback ref

[📖 Documentación](https://es.reactjs.org/docs/refs-and-the-dom.html#callback-refs) |

React llamara al callback del ref con el elemento del DOM cuando el componente sea montado, y lo llamara con null cuando este se desmonte. Se asegura que las referencias serán actualizadas antes que el componentDidMount o el componentDidUpdate sean ejecutados.

- Pasamos una función al prop ref esta funcion recibirá al elemento como argumento

```jsx
  return(
    <>
      <input type="text" ref={this.setInputTextRef} />
      <button onClick={this.handleFocus}>focus</button>
    </>
  )
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
  return(
    <>
      <input type="text" ref="nameRef" />
      <button onClick={this.handleFocus}>focus</button>
    </>
  )
```

- Podemos hacer uso de métodos que existen en el elemento nativo

```jsx
handleFocus = () => {
  console.log("click in focus");
  console.log(this.refs.nameRef);
  this.refs.nameRef.focus();
};
```
