// IMPORTACIONES
import React, { useState } from "react";
import react from "../assets/images/react.png";
import Table from "./Table";
import axios from "axios";

export default function Form() {


    // COMPONENT STATES - Estados del Componente
    const [members, setMembers] = useState([]);
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");


    // PETICIONES AXIOS - Backend GET, POST

    // POST
    const addMember = () => {
        //axios.post("http://localhost:3001/create", {
        //    name: name,
        //    lastname: lastname
        //})
        //    .then(() => console.log("Se ha añadido el integrante correctamente!!"))
        //    .catch((error) => console.log(error));
        console.log("Estoy funcionando...")
    }


    return (
        <div className="h-screen md:flex">
            <div className="h-full md:w-3/6 bg-white shadow-2xl shadow p-5">
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
                    <input type="text" className="form-control" name="" id="" onChange={(event) => setName(event.target.value)}/>
                    <label htmlFor="" className="text-3xl mt-5 font-bold">
                        2. Apellido :
                    </label>
                    <h2 className="text-2xl float-right mt-14">🤵</h2>
                    <input type="text" className="form-control" name="" id="" onChange={(event) => setLastname(event.target.value)}/>

                    <button className="btn btn-success mt-20 px-5 py-3"
                    onClick={ addMember }>
                        <strong>Ingresar Persona</strong>
                    </button>

                <div className="flex">
                    <img
                        src={react}
                        alt=""
                        className="pl-5 2xl:mt-3 w-80 h-40"
                    />

                    <p className="w-3/6 text-justify font-bold mt-5 ml-16 hidden 2xl:block">
                        Este CRUD fue creado con React js del lado del Frontend,
                        y Node del lado del Backend. Puede Ingresar, Eliminar,
                        Actualizar y Seleccionar datos de una BD - Mysql.<br />
                        <br />
                        Desarrollado por : <i>Kevin Jefrey Daza Acosta 💻</i>
                    </p>
                </div>
            </div>

            <div
                className="h-full md:w-3/6"
                style={{ backgroundColor: "#263238" }}
            >
                <Table members={ members }/>
            </div>
        </div>
    );
}
