// IMPORTACIONES 
import React from "react";
import react from "../assets/images/react.png";



export default function Form() {
    return (
        <div>
            <form action="" className="p-5">
                <h1 className="md:text-5xl font-bold">
                    Formulario CRUD <i>React js</i>
                </h1>
                <h3>
                    <strong className="text-2xl">
                        CRUD Básico realizado con REACT js y NODE js
                    </strong>
                </h3>
                <label htmlFor="" className="text-3xl mt-36 font-bold">
                    1. Nombre :
                </label>
                <h2 className="text-2xl float-right mt-36">🤵</h2>
                <input type="text" className="form-control" name="" id="" />
                <label htmlFor="" className="text-3xl mt-5 font-bold">
                    2. Apellido :
                </label>
                <h2 className="text-2xl float-right mt-14">🤵</h2>
                <input type="text" className="form-control" name="" id="" />

                <button className="btn btn-success mt-20 px-5 py-3">
                    <strong>Ingresar Persona</strong>
                </button>
            </form>

            <div className="flex">
                <img src={react} alt="" className="pl-5 2xl:mt-3 w-80 h-40" />

                <p className="w-3/6 text-justify font-bold mt-5 ml-16 hidden 2xl:block">
                    Este CRUD fue creado con React js del lado del Frontend, y
                    Node del lado del Backend. Puede Ingresar, Eliminar, Actualizar y
                    Seleccionar datos de una BD - Mysql. <br />
                    <br />
                    Desarrollado por : <i>Kevin Jefrey Daza Acosta 💻</i>
                </p>
            </div>
        </div>
    );
}
