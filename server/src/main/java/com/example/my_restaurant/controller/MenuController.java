package com.example.my_restaurant.controller;

import com.example.my_restaurant.model.Menu;
import com.example.my_restaurant.service.MenuService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/menu")
@AllArgsConstructor
public class MenuController {
    private final MenuService menuService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping
    public Menu create(@RequestBody Menu menu) {
        return menuService.creer(menu);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{restaurantId}")
    public List<Menu> getMenusByRestaurantId(@PathVariable Long restaurantId) {
        return menuService.lireAvecId(restaurantId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/{id}")
    public Menu update(@PathVariable Long id, @RequestBody Menu menu){
        return menuService.modifier(id, menu);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id){
        return menuService.supprimer(id);
    }
}
