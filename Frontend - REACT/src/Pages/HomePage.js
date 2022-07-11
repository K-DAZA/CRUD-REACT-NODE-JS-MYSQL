// IMPORTACIONES 
import React, { useState } from "react";
import Form from "../components/Form";
import "../assets/css/HomePage.css"
import Table from "../components/Table";


export default function HomePage() {

    // COMPONENT STATES - Estados del Componente
    const [members, setMembers] = useState();        

    
    // PETICIONES AXIOS - Backend
    


    return (
        <div className="h-screen md:flex">
            <div className="h-full md:w-3/6 bg-white shadow-2xl shadow">
                <Form />
            </div>
            <div
                className="h-full md:w-3/6"
                style={{ backgroundColor: "#263238" }}>
                <Table members={members} />
            </div>
        </div>
    );
}
