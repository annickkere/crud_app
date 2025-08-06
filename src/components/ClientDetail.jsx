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
        <div className="d-flex justify-content-center align-items-center m-5">
            <div className="border p-4 rounded">
                <h1 className="text-center">Détails du client</h1>
                <div className="border rounded mb-3">
                    <p className="m-2">Nom du client: {client.nom}</p>
                </div>
                <div className="border rounded mb-3">
                    <p className="m-2">Adresse: {client.adresse}</p>
                </div>
                <div className="border rounded mb-3">
                    <p className="m-2">Téléphone: {client.tel}</p>
                </div>
                <button className="btn btn-success m-2 text-center" onClick={handleRetour}>Retour à la liste</button>
            </div>
        </div>
    );
};

export default ClientDetail;