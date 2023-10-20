import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { BlockPicker } from "react-color";


function RegisterForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nomRestaurant: '',
        urlSite: '',
        motDePasseAdmin: '',
        couleurLiens: '',
        photoBanniere: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/configuration', formData);
            localStorage.setItem('configuration', JSON.stringify(response.data));

            // Rediriger vers la page du dashboard
            navigate('/admin/dashboard');
        } catch (error) {
            // Gérer les erreurs ici si nécessaire
            console.error(error);
        }
    };

    return (
        <MDBContainer fluid>
            <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Créer un restaurant</p>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="user me-3" size='lg'/>
                                <MDBInput
                                    label='Nom du restaurant'
                                    id='nomRestaurant'
                                    type='text'
                                    className='w-100'
                                    name='nomRestaurant'
                                    value={formData.nomRestaurant}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="envelope me-3" size='lg'/>
                                <MDBInput
                                    label='Url site'
                                    id='urlSite'
                                    type='text'
                                    name='urlSite'
                                    value={formData.urlSite}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="lock me-3" size='lg'/>
                                <MDBInput
                                    label='Mot de passe'
                                    id='motDePasse'
                                    type='password'
                                    name='motDePasseAdmin'
                                    value={formData.motDePasse}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="lock me-3" size='lg'/>
                                <BlockPicker
                                    color={formData.couleurLiens}
                                    onChange={(color) => {
                                        //setBlockPickerColor(color.hex);
                                        setFormData((prevFormData) => ({ ...prevFormData, couleurLiens: color.hex }));
                                    }}
                                />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="lock me-3" size='lg'/>
                                <MDBInput
                                    label='Banniere'
                                    id='banniere'
                                    type='text'
                                    name='photoBanniere'
                                    value={formData.banniere}
                                    onChange={handleChange}
                                />
                            </div>
                            <button className="btn btn-primary" onClick={handleSubmit}>
                                Register
                            </button>
                        </MDBCol>

                        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}

export default RegisterForm;
