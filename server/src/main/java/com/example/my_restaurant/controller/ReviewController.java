package com.example.my_restaurant.controller;

import com.example.my_restaurant.model.Review;
import com.example.my_restaurant.service.ReviewService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/review")
@AllArgsConstructor
public class ReviewController {
    private final ReviewService reviewService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping
    public Review create(@RequestBody Review review){
        return reviewService.creer(review);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{restaurantId}")
    public List<Review> get(@PathVariable Long restaurantId){
        return reviewService.lireAvecId(restaurantId);
    }
}
