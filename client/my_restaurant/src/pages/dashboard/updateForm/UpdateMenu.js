import React from "react";
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow} from "mdb-react-ui-kit";
import axios from "axios";

const UpdateMenu = ({menu}) => {
    const [isFormVisible, setFormVisible] = React.useState(false);
    const [formData, setFormData] = React.useState({
        nom: menu.nom,
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
            await axios.put(`http://localhost:8080/menu/${menu.id}`, formData);
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
            <button className="btn btn-primary" onClick={handleSubmit}>
                modifier
            </button>
        </div>
    )
}
export default UpdateMenu