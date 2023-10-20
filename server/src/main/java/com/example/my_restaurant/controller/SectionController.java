package com.example.my_restaurant.controller;

import com.example.my_restaurant.model.Section;
import com.example.my_restaurant.service.SectionService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/section")
@AllArgsConstructor
public class SectionController {
    private final SectionService sectionService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{restaurantId}")
    public List<Section> getSectionsByMenuId(@PathVariable Long restaurantId){
        return sectionService.lireAvecId(restaurantId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping
    public Section create(@RequestBody Section section) {
        return sectionService.creer(section);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        return sectionService.supprimer(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/{id}")
    public Section update(@PathVariable Long id, @RequestBody Section section){
        return sectionService.modifier(id, section);
    }

}
