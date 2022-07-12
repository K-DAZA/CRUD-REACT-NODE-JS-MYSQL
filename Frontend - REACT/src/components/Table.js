import React from "react";

export default function Table(props) {

    // ALMACENANDO PROPS
    const members = props.members;

    return (
        <div>
            <h1 className=" md:text-5xl font-bold p-5 text-white text-center">
                Integrantes Cognitus
            </h1>
            <div className="p-5">
                <table className="table text-white">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {members.map((items) => (
                            <tr key={items.id}>
                                <th scope="row">{items.id}</th>
                                <td>{items.name}</td>
                                <td>{items.lastname}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
