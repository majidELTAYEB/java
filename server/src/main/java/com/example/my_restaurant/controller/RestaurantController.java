package com.example.my_restaurant.controller;

import com.example.my_restaurant.model.Restaurant;
import com.example.my_restaurant.service.RestaurantService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/restaurant")
@AllArgsConstructor
public class RestaurantController {
   private final RestaurantService restaurantService;

    @CrossOrigin(origins = "http://localhost:3000")
   @PostMapping("/create")
   public Restaurant create(@RequestBody Restaurant restaurant) {

       return restaurantService.creer(restaurant);
   }

   @CrossOrigin(origins = "http://localhost:3000")
   @GetMapping("/{id}")
   public ResponseEntity<Optional<Restaurant>> get(@PathVariable Long id) {
       Optional<Restaurant> restaurant = restaurantService.lireAvecId(id);
       return ResponseEntity.ok(restaurant);
   }

    @CrossOrigin(origins = "http://localhost:3000")
   @PutMapping("/update/{id}")
   public  Restaurant update(@PathVariable Long id, @RequestBody Restaurant restaurant){
       return restaurantService.modifier(id,restaurant);
   }

    @CrossOrigin(origins = "http://localhost:3000")
   @DeleteMapping("/{id}")
   public String delete(@PathVariable Long id){
       return restaurantService.supprimer(id);
   }
}
