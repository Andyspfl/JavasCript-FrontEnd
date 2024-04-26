import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";

const users = [
  {
    id: 1,
    name: "Ryan Rade",
    image:
      "https://th.bing.com/th/id/R.7e6c0ac124f5d72ecbcabeaa92bd103b?rik=zSXKCmXljHAEww&pid=ImgRaw&r=0",
  },
  {
    id: 2,
    name: "Ryan Rade",
    image:
      "https://th.bing.com/th/id/R.7e6c0ac124f5d72ecbcabeaa92bd103b?rik=zSXKCmXljHAEww&pid=ImgRaw&r=0",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));

const handleChange = (e) => {
  console.log(e.target.value);
};

function Counter() {
  const [mensaje, setMensaje] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(function(){
    console.log('render');
  },[ counter ])
  return (
    <div>
      <input onChange={e => setMensaje(e.target.value)} />
      <button onClick={() => {
        alert('El mensaje es'+mensaje)
      }}>Save</button>
      <hr></hr>

      <h1>Counter:{counter}</h1>
      <button onClick={() => {setCounter(counter+1)}}>sumar</button>
    </div>
  );
}
// Mi primer componente en react
root.render(
  <>
    <Counter />
  </>
);
