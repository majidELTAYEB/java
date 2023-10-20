package com.example.my_restaurant.controller;

import com.example.my_restaurant.model.Configuration;
import com.example.my_restaurant.service.ConfigurationService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/configuration")
@AllArgsConstructor
public class ConfigurationController {
    private final ConfigurationService configurationService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping
    public Configuration create(@RequestBody Configuration configuration) {

        return configurationService.creer(configuration);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {


        return configurationService.supprimer(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/{id}")
    public Configuration update(@PathVariable Long id, @RequestBody Configuration configuration){
       return configurationService.modifier(id,configuration);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{id}")
    public Optional<Configuration> readById(@PathVariable Long id){
        return configurationService.lireAvecId(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public List<Configuration> read(){
        return configurationService.lire();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/url/{urlSite}")
    public Optional<Configuration> readByUrl(@PathVariable String urlSite){
        return configurationService.lireAvecUrlSite(urlSite);
    }
}
