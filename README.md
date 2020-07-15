<h1 align="center">⚛️ Refs</h1>
<p align="center">
Poder acceder a los elementos en el DOM real
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/62570198/87606959-da333c00-c6c1-11ea-8faf-08b4f1e7a127.gif" alt="ref img"/>
</p>

## String Ref
<p align="center" style="color:red">
Se encuentra actualmente deprecado y no se debe de usar
</p>

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
