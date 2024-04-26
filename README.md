# React
creacion de componentes con js o jsx, no importa mucho el que usemos

Ejemplo de uso del `props`
```javascript
export function Greeting(props){
    console.log(props)
    return <h1>Hola mundo componente en react</h1>
}

```

Ejemplo de utilizacion del props importando las funciones desde la clase index, importando la clase Greeting,jsx

```javascript
root.render(
  <>
    <Greeting title="hola" />
    <Greeting  y = "bye"/>
    <Greeting  x = {30}/>
    <Greeting z = {true}/>
    <Navbar />
    <Product />
    <UserCard />
  </>
);
```
title solamente es un parametro de la funcion, tambien se pueden enviar mas parametros

Ejemplo utilizando el props llevando el props.title
```javascript
export function Greeting(props){
    console.log(props)
    return <h1>props.title</h1>
}
```


Este codigo funciona para recorrer una API consumida
recorriendo varios espacios de la API
```jsx
{users.map((user, index) => {
      return (
        <div key={index}>
          <h1>{user.name}</h1>
          <img src={user.image}/>
        </div>
      );
    })}
```

## Use effect