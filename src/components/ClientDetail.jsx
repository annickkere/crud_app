import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ClientDetail = () => {
    const { id } = useParams();
    const [client, setClient] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchClient = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/clients/${id}`);
                setClient(response.data);
            } catch (error) {
                console.error("Erreur de chargement :", error);
            }
        };

        fetchClient();
    }, [id]);

    const handleRetour = () => {
        navigate("/clients");
    };

    return (
        <div>
            <h1>Détails du client</h1>
            <p>Nom du client: {client.nom}</p>
            <p>Adresse: {client.adresse}</p>
            <p>Téléphone: {client.tel}</p>
            <button onClick={handleRetour}>Retour à la liste</button>
        </div>
    );
};

export default ClientDetail;