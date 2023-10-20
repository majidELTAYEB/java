package com.example.my_restaurant.service;

import com.example.my_restaurant.model.Review;
import com.example.my_restaurant.repository.ReviewRepository;

import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;
    @Override
    public Review creer(Review review) {
        return reviewRepository.save(review);
    }

    @Override
    public List<Review> lire() {
        return null;
    }

    @Override
    public Review modifier(Long id, Review review) {
        return null;
    }

    @Override
    public String supprimer(Long id) {
        return null;
    }

    @Override
    public List<Review> lireAvecId(Long restaurantId) {
        return reviewRepository.findByRestaurantId(restaurantId);
    }
}
