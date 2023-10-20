import React from "react";
import {MDBBtn} from "mdb-react-ui-kit";
import axios from "axios";

const UpdateSection = ({section}) => {
    const [isFormVisible, setFormVisible] = React.useState(false);
    const [formData, setFormData] = React.useState({
        nom: section.nom,
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
            await axios.put(`http://localhost:8080/section/${section.id}`, formData);
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
export default UpdateSection