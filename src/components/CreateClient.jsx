import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateClient = () => {
    const [client, setClient] = useState({ nom: "", adresse: "", tel: "" });
    const navigate = useNavigate();

    const handleCreate = async () => {
        await axios.post("http://localhost:3001/clients", client); //ajout client 
        navigate("/clients", { replace: true }); //après l’ajout retour à la liste 
    };

    return (
        <div className="d-flex justify-content-center align-items-center m-5">
            <div className="border p-4 rounded">
                <h1 className="text-center">Créer un nouveau client</h1>
                <form className="text-center">
                    <div className="form-group col-md m-3">
                        <label className="d-none">Nom du client : </label>
                        <input
                            type="text"
                            value={client.nom}
                            onChange={(e) => setClient({ ...client, nom: e.target.value })}
                            className="form-control form-control-lg"
                            placeholder="Nom"
                        />
                    </div>
                    <div className="form-group col-md m-3">
                        <label className="d-none">Adresse : </label>
                        <input
                            type="text"
                            value={client.adresse}
                            onChange={(e) => setClient({ ...client, adresse: e.target.value })}
                            placeholder="Adresse"
                            className="form-control form-control-lg"
                        />
                    </div>
                    <div className="form-group col-md m-3">
                        <label className="d-none">Téléphone : </label>
                        <input
                            type="text"
                            value={client.tel}
                            onChange={(e) => setClient({ ...client, tel: e.target.value })}
                            placeholder="Téléphone"
                            className="form-control form-control-lg"
                        />
                    </div>
                    <button type="button" onClick={handleCreate} className="btn btn-success m-2 form-control-lg">
                        Créer
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateClient;