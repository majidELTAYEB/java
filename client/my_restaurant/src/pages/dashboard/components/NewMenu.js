import React, {useState} from "react";
import axios from "axios";
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow} from "mdb-react-ui-kit";

const NewMenu = ({restaurant}) => {
    const [isFormVisible, setFormVisible] = useState(false);
    const [formData, setFormData] = useState({
        nom: '',
        restaurant:{
            id : restaurant.id
        }
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
            const response = await axios.post('http://localhost:8080/menu', formData);
            window.location.reload(false);

        } catch (error) {
            // Gérer les erreurs ici si nécessaire
            console.error(error);
        }
    };

    return (
        <MDBContainer fluid>
            <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol
                            md='10'
                            lg='6'
                            className='order-2 order-lg-1 d-flex flex-column align-items-center'
                        >
                            <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
                                Nouveau menu
                            </p>

                            <div className='d-flex flex-row align-items-center mb-4 '>
                                <MDBIcon fas icon='user me-3' size='lg' />
                                <MDBInput
                                    label='Nom'
                                    id='nom'
                                    name='nom'
                                    type='text'
                                    className='w-100'
                                    value={formData.nom}
                                    onChange={handleChange}
                                />
                            </div>
                            <button className="btn btn-primary" onClick={handleSubmit}>
                                Nouveau
                            </button>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}
export default NewMenu