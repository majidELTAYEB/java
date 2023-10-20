import React from "react";
import {useNavigate} from "react-router-dom";
const Logout = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        // Supprimer l'objet "restaurant" du localStorage lors de la déconnexion
        localStorage.removeItem('configuration');
        navigate("/admin")
    };

    return (
    <a className="nav-link" onClick={handleLogout}>Déconnexion <span className="sr-only">(current)</span></a>
    );
}
export default Logout