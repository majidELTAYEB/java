import React from "react";
import {MDBBtn} from "mdb-react-ui-kit";
import axios from "axios";
import { BlockPicker } from "react-color";

const UpdateConfiguration = ({configuration}) => {
    const [isFormVisible, setFormVisible] = React.useState(false);
    const [formData, setFormData] = React.useState({
        nomRestaurant: configuration.nomRestaurant,
        urlSite: configuration.urlSite,
        couleurLiens: configuration.couleurLiens,
        photoBanniere: configuration.photoBanniere,
        motDePasseAdmin: configuration.motDePasseAdmin
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
          const response =  await axios.put(`http://localhost:8080/configuration/${configuration.id}`, formData);
            localStorage.setItem('configuration', JSON.stringify(response.data));
            window.location.reload(false);
        } catch (error) {
            // Gérer les erreurs ici si nécessaire
            console.error(error);
        }
    };

    return(
        <div>
            <div className="form-group">
                <label htmlFor="usr">Nom Restaurant:</label>
                <input
                    id='nomRestaurant'
                    name='nomRestaurant'
                    type='text'
                    value={formData.nomRestaurant}
                    onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="usr">url site:</label>
                <input
                    id='urlSite'
                    name='urlSite'
                    type='text'
                    value={formData.urlSite}
                    onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="usr">couleur liens:</label>
                <BlockPicker
                    color={formData.couleurLiens}
                    onChange={(color) => {
                        //setBlockPickerColor(color.hex);
                        setFormData((prevFormData) => ({ ...prevFormData, couleurLiens: color.hex }));
                    }}
                />
            </div>
            <div className="form-group">
                <label htmlFor="usr">photo banniere:</label>
                <input
                    id='photoBanniere'
                    name='photoBanniere'
                    type='photoBanniere'
                    value={formData.photoBanniere}
                    onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="usr">motDePasseAdmin:</label>
                <input
                    id='motDePasseAdmin'
                    name='motDePasseAdmin'
                    type='text'
                    value={formData.motDePasseAdmin}
                    onChange={handleChange}/>
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>
                modifier
            </button>
        </div>
    )
}
export default UpdateConfiguration