import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow
} from "mdb-react-ui-kit";
import axios from "axios";

const NewRestaurant = () => {
    const configuration = JSON.parse(localStorage.getItem('configuration'))
    const [isFormVisible, setFormVisible] = useState(false);
    const [formData, setFormData] = useState({
        informationsContact: '',
        adresse:"",
        configuration:{
            id : configuration.id
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
            const response = await axios.post('http://localhost:8080/restaurant/create', formData);
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
                                information restaurant
                            </p>

                            <div className='d-flex flex-row align-items-center mb-4 '>
                                <MDBIcon fas icon='user me-3' size='lg' />
                                <MDBInput
                                    label='Adresse'
                                    id='adress'
                                    name='adresse'
                                    type='text'
                                    className='w-100'
                                    value={formData.adresse}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='d-flex flex-row align-items-center mb-4'>
                                <MDBIcon fas icon='lock me-3' size='lg' />
                                <MDBInput
                                    label='Informations contact'
                                    id='informationsContact'
                                    name='informationsContact'
                                    type='text'
                                    value={formData.password}
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
};

export default NewRestaurant;
