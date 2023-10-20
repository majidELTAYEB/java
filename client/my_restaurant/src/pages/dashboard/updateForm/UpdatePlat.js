import React from "react";
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow} from "mdb-react-ui-kit";
import axios from "axios";

const UpdatePlat = ({plat}) => {
    const [isFormVisible, setFormVisible] = React.useState(false);
    const [formData, setFormData] = React.useState({
        nom: plat.nom,
        photo: plat.photo,
        description: plat.description,
        prix: plat.prix,
        allergenes: plat.allergenes,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleFormToggle = () => {
        setFormVisible(!isFormVisible);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/plat/${plat.id}`, formData);
            window.location.reload(false);
        } catch (error) {
            // Gérer les erreurs ici si nécessaire
            console.error(error);
        }
    };

    return(
        <div>
            <div className="form-group">
                <label htmlFor="usr">Nom:</label>
                <input
                    id='nom'
                    name='nom'
                    type='text'
                    value={formData.nom}
                    onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="usr">Photo url:</label>
                <input
                    id='nom'
                    name='photo'
                    type='text'
                    value={formData.photo}
                    onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="usr">Description:</label>
                <input
                    id='description'
                    name='description'
                    type='text'
                    value={formData.description}
                    onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="usr">Prix:</label>
                <input
                    id='prix'
                    name='prix'
                    type='number'
                    value={formData.prix}
                    onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="usr">Allergenes:</label>
                <input
                    id='allergenes'
                    name='allergenes'
                    type='text'
                    value={formData.allergenes}
                    onChange={handleChange}/>
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>
                modifier
            </button>
        </div>
    )
}
export default UpdatePlat