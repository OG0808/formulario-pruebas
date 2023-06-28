import React, { useCallback, useRef } from "react";
import { useState } from "react";

const NoControlado = () => {
  const form = useRef(null);

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    //! ESTA FUNCION SE UTILIZA PARA EVITAR QUE EL FORMULARIO
    //! RECARGUE LA PAGINA
    e.preventDefault();
    //! ESTOS SON LAS PASOS PARA CAPTURAR LA INFORMACION DE LOS INPUTS
    const data = new FormData(form.current);
    const { title, description, state } = Object.fromEntries([
      ...data.entries(),
    ]);
    console.log(title);
    //!VALIDAR LOS DATOS
    if (!title.trim()) return setError("tienes que llenar este campo");

    //!ENVIAR LOS DATOS
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        type="text"
        placeholder="ingrese todo"
        className="form-control mb-2"
        name="title"
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese su descripcion"
        name="descripcion"
      />
      <select className="form-select mb-2" name="state">
        <option value="pendiente">pendiente</option>
        <option value="completado">completado</option>
      </select>
      <button className="btn btn-primary" type="submit">
        Procesar
      </button>
      {
        error !== '' && error
      }
    </form>
  );
};

export default NoControlado;
