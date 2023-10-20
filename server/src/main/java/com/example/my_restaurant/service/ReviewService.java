package com.example.my_restaurant.service;

import java.util.List;
import java.util.Optional;

import com.example.my_restaurant.model.Review;
public interface ReviewService {
    Review creer (Review review);
    List<Review> lire();
    Review modifier(Long id, Review review);
    String supprimer(Long id);
    List<Review> lireAvecId(Long restaurantId);
}
