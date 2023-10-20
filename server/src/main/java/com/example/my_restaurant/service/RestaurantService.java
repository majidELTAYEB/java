package com.example.my_restaurant.service;

import java.util.List;
import java.util.Optional;

import com.example.my_restaurant.model.Restaurant;
public interface RestaurantService {
    Restaurant creer (Restaurant restaurant);
    List<Restaurant> lire();
    Restaurant modifier(Long id, Restaurant restaurant);
    String supprimer(Long id);

    Optional<Restaurant> lireAvecId(Long id);
}
