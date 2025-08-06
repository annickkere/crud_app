import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateClient = () => {
    const { id } = useParams();//récupération id du client à modifier 
    const [client, setClient] = useState({ nom: '', adresse: '', tel: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchClient = async () => {
            const response = await axios.get(`http://localhost:3001/clients/${id}`);
            setClient(response.data);
        };

        fetchClient();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/clients/${id}`, client);
        navigate('/clients', { replace: true });
    };

    return (
        <div className="d-flex justify-content-center align-items-center m-5">
            <div className="border p-4 rounded">
                <h1 className="text-center">Mettre à jour le client</h1>
                <form className="text-center">
                    <div className="form-group row col-md m-3">
                        <label className="fw-bold">Nom du client:</label>
                        <input type="text" value={client.nom} className="form-control form-control-lg text-center" onChange={(e) => setClient({
                            ...client,
                            nom: e.target.value
                        })} />
                    </div>
                    <div className="form-group col-md m-3">
                        <label className="fw-bold">Adresse:</label>
                        <input type="text" value={client.adresse} className="form-control form-control-lg text-center" onChange={(e) => setClient({
                            ...client, adresse: e.target.value
                        })} />
                    </div>
                    <div className="form-group col-md m-3">
                        <label className="fw-bold">Téléphone:</label>
                        <input type="text" value={client.tel} className="form-control form-control-lg text-center" onChange={(e) => setClient({
                            ...client,
                            tel: e.target.value
                        })} />
                    </div>
                    <button className="btn btn-success m-2 form-control-lg" onClick={handleUpdate}>Mettre à jour</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateClient;