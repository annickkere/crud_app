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
        <div>
            <h1> Liste des clients</h1>
            <div>
                <Link to="/clients/create">
                    Ajouter
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>Nom</td>
                        <td>Adresse</td>
                        <td>Téléphone</td>
                        <td>Opérations</td>
                    </tr>
                </thead>
                <tbody>
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
                                    <Link to={`/clients/${client.id}/update`}>
                                        <button>Modifier</button>
                                    </Link>
                                    <button onClick={() => handleDelete(client.id)}>
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