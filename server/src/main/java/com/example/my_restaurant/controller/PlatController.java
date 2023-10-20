package com.example.my_restaurant.controller;

import com.example.my_restaurant.model.Plat;
import com.example.my_restaurant.service.PlatService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/plat")
@AllArgsConstructor
public class PlatController {
    private final PlatService platService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{sectionId}")
    public List<Plat> getPlatBySection(@PathVariable Long sectionId){
        return platService.lireAvecId(sectionId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping
    public Plat create(@RequestBody Plat plat) {

        return platService.creer(plat);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id){
        return platService.supprimer(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/{id}")
    public Plat update(@PathVariable Long id, @RequestBody Plat plat){
        return platService.modifier(id, plat);
    }
}
