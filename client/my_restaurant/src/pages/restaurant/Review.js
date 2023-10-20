import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from "axios";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const Review = ({ reviews, idRestaurant, couleurLiens }) => {
    const [formData, setFormData] = useState({
        rating: 0,
        comment :"",
        restaurant : {
           id:idRestaurant
        }
    });

    const handleCommentChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmitComment = async (e) => {

        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/review', formData);
            window.location.reload(false);

        } catch (error) {
            // Gérer les erreurs ici si nécessaire
            console.error(error);
        }
        setFormData({
            rating: 0,
            comment :""
        });
    };

    return (
        <div>
            <h2>Avis</h2>
            {reviews.map((review) => (
                <div key={review.id} className="border p-3 mb-3">
                    <Typography component="legend">Évaluation</Typography>
                    <Rating
                        value={review.rating}
                    />
                    <p>{review.comment}</p>
                </div>
            ))}

            <h3>Écrire un commentaire</h3>
            <Form>
                <Form.Group>
                    <Form.Label>Évaluation :</Form.Label>
                    <Form.Control name="rating" as="select" value={formData.rating} onChange={handleCommentChange}>
                        <option value="">Choisissez une évaluation</option>
                        <option value="1">1 étoile</option>
                        <option value="2">2 étoiles</option>
                        <option value="3">3 étoiles</option>
                        <option value="4">4 étoiles</option>
                        <option value="5">5 étoiles</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Commentaire :</Form.Label>
                    <Form.Control name="comment" as="textarea" rows="4" value={formData.comment} onChange={handleCommentChange} />
                </Form.Group>
                <Button style={{color:couleurLiens, background:"white"}} onClick={handleSubmitComment}>Soumettre</Button>
            </Form>
        </div>
    );
};

export default Review;
