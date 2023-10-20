import React from "react";
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow} from "mdb-react-ui-kit";
import axios from "axios";

const UpdateSection = ({restaurant}) => {
    const [isFormVisible, setFormVisible] = React.useState(false);
    const [formData, setFormData] = React.useState({
        adresse: restaurant.adresse,
        informationsContact: restaurant.informationsContact
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
            await axios.put(`http://localhost:8080/restaurant/${restaurant.id}`, formData);
            window.location.reload(false);
        } catch (error) {
            // Gérer les erreurs ici si nécessaire
            console.error(error);
        }
    };

    return(
        <div>
            <div className="form-group">
                <label htmlFor="usr">Adresse:</label>
                <input
                    id='adresse'
                    name='adresse'
                    type='text'
                    value={formData.adresse}
                    onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="usr">Information contact:</label>
                <input
                    id='informationsContact'
                    name='informationsContact'
                    type='text'
                    value={formData.informationsContact}
                    onChange={handleChange}/>
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>
                modifier
            </button>
        </div>
    )
}
export default UpdateSection