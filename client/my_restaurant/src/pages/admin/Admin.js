// pages/admin.js
import React, {useEffect, useState} from 'react';
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import {useNavigate} from "react-router-dom";

function Admin() {
    const navigate = useNavigate();
    const [showLoginForm, setShowLoginForm] = useState(true);
    const handleToggleForm = () => {
        setShowLoginForm((prevShowLoginForm) => !prevShowLoginForm);
    };



    useEffect(()=>{
        if(JSON.parse(localStorage.getItem('configuration'))){
            navigate('/admin/dashboard');
        }
    },[])

    return (
        <div>
            <div>
                {showLoginForm ? <LoginForm /> : <RegisterForm />}
                <a className="card-link" onClick={handleToggleForm}>
                    {showLoginForm ? 'Show Register Form' : 'Show Login Form'}
                </a>
            </div>
        </div>
    );
}

export default Admin;