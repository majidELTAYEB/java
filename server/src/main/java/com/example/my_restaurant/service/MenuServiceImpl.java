package com.example.my_restaurant.service;

import com.example.my_restaurant.model.Menu;
import com.example.my_restaurant.repository.MenuRepository;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
@AllArgsConstructor
public class MenuServiceImpl implements MenuService {
    private final MenuRepository menuRepository;

    @Override
    public Menu creer(Menu menu) {
        return menuRepository.save(menu);
    }

    @Override
    public List<Menu> lire() {
        return menuRepository.findAll();
    }


    @Override
    public Menu modifier(Long id, Menu menu) {
        return menuRepository.findById(id)
                .map(p-> {
                    p.setNom(menu.getNom());
                    return menuRepository.save(p);
                }).orElseThrow(()-> new RuntimeException("menu pas trouvé"));
    }


    @Override
    public String supprimer(Long id) {
        menuRepository.deleteById(id);
        return "élement supprimer";
    }

    @Override
    public List<Menu> lireAvecId(Long menu) {
        return menuRepository.findByRestaurantId(menu);
    }
}
