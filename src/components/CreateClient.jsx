import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";

const CreateClient = () => {
    const [client, setClient] = useState({ nom: "", adresse: "", tel: "" });
    const navigate = useNavigate();

    const handleCreate = async () => {
        await axios.post("http://localhost:3001/clients", client); //ajout client 
        navigate("/clients", { replace: true }); //après l’ajout retour à la liste 
    };

    return (
        <div>
            <center>
                <h1>Créer un nouveau client</h1>
                <form>
                    <label>Nom du client : </label>
                    <input
                        type="text"
                        value={client.nom}
                        onChange={(e) => setClient({ ...client, nom: e.target.value })}
                    />
                    <br />
                    <label>Adresse : </label>
                    <input
                        type="text"
                        value={client.adresse}
                        onChange={(e) => setClient({ ...client, adresse: e.target.value })}
                    />
                    <br />
                    <label>Téléphone : </label>
                    <input
                        type="text"
                        value={client.tel}
                        onChange={(e) => setClient({ ...client, tel: e.target.value })}
                    />
                    <br />
                    <button type="button" onClick={handleCreate}>
                        Créer
                    </button>
                </form>
            </center>
        </div>
    );
};

export default CreateClient;