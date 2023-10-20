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
} from 'mdb-react-ui-kit';
import {useNavigate} from "react-router-dom";
import axios from "axios";

function LoginForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:8080/configuration', formData);
            const isRestaurantIncluded = response.data.filter(
                (restaurant) => restaurant.nomRestaurant === formData.name
            );
            if(isRestaurantIncluded.length > 0){
                localStorage.setItem('configuration', JSON.stringify(isRestaurantIncluded[0]));
                navigate('/admin/dashboard');
            }

        } catch (error) {
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
                                Sign up
                            </p>

                            <div className='d-flex flex-row align-items-center mb-4 '>
                                <MDBIcon fas icon='user me-3' size='lg' />
                                <MDBInput
                                    label='Your Name'
                                    id='name'
                                    name='name'
                                    type='text'
                                    className='w-100'
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='d-flex flex-row align-items-center mb-4'>
                                <MDBIcon fas icon='lock me-3' size='lg' />
                                <MDBInput
                                    label='Password'
                                    id='password'
                                    name='password'
                                    type='password'
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>

                            <button className="btn btn-primary" onClick={handleSubmit}>
                                Login
                            </button>
                        </MDBCol>

                        <MDBCol
                            md='10'
                            lg='6'
                            className='order-1 order-lg-2 d-flex align-items-center'
                        >
                            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}

export default LoginForm;
