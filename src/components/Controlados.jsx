import React, { useCallback, useRef } from "react";
import { useState } from "react";

const Controlado = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [state, setState] = useState("pendiente");



const [todo, setTodo] = useState({
    title: 'Todo #01',
    description : 'Descripcion #01',
    state: 'Pendiente'
})
console.log(todo);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange =e =>{
    setTodo({
        ...todo,
        [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="ingrese todo"
        className="form-control mb-2"
        name="title"
        value={todo.title}
        onChange={handleChange}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese su descripcion"
        name="descripcion"
        value={todo.description}
        onChange={handleChange}
      />
      <select className="form-select mb-2" 
      name="state" 
      value={todo.state}
      onChange={handleChange}
      >
        <option value="pendiente">pendiente</option>
        <option value="completado">completado</option>
      </select>
      <button className="btn btn-primary" type="submit">
        Procesar
      </button>
    </form>
  );
};

export default Controlado;
