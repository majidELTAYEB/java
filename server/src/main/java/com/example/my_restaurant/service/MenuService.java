package com.example.my_restaurant.service;

import java.util.List;

import com.example.my_restaurant.model.Menu;

public interface MenuService {
    Menu creer (Menu menu);
    List<Menu> lire();
    Menu modifier(Long id, Menu menu);
    String supprimer(Long id);
    List<Menu> lireAvecId(Long menu);
}
