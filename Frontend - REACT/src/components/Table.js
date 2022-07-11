import React from "react";

export default function Table() {
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
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry the Bird</td>
                            <td>Larry the Bird</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
