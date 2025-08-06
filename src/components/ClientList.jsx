import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ClientList = () => {
    // Stocker et Mettre à jour de la Liste des Clients
    const [clients, setClients] = useState([]);

    // Récupération des données avec "axios"
    const fetchData = async () => {
        const response = await axios.get("http://localhost:3001/clients");
        // Chargement du résultat de la requête 
        setClients(response.data);
    };

    // Chargement automatique des données avec useEffect 
    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        // axios.delete pour supprimer le client identifié par son "id" 
        await axios.delete(`http://localhost:3001/clients/${id}`);
        fetchData();
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4"> Liste des clients</h1>
            <div className="text-center mb-3">
                <Link to="/clients/create" className="btn btn-success">
                    Ajouter
                </Link>
            </div>
            <table className="table table-bordered table-hover text-center">
                <thead className="table-dark fw-bold">
                    <tr>
                        <td>Nom</td>
                        <td>Adresse</td>
                        <td>Téléphone</td>
                        <td>Opérations</td>
                    </tr>
                </thead>
                <tbody className="fw-normal">
                    {clients.map(
                        (
                            client
                        ) => (
                            <tr key={client.id}>
                                <td>
                                    <Link to={`/clients/${client.id}`}>{client.nom}</Link>
                                </td>
                                <td>{client.adresse}</td>
                                <td>{client.tel}</td>
                                <td>
                                    <Link to={`/clients/${client.id}/update`} className="m-2">
                                        <button className="btn btn-primary">Modifier</button>
                                    </Link>
                                    <button onClick={() => handleDelete(client.id)} className="btn btn-danger">
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div >
    );
}

export default ClientList;