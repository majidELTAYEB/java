package com.example.my_restaurant.service;

import java.util.List;
import java.util.Optional;

import com.example.my_restaurant.model.Plat;
public interface PlatService {
    Plat creer (Plat plat);
    List<Plat> lire();
    Plat modifier(Long id, Plat plat);
    String supprimer(Long id);
    List<Plat> lireAvecId(Long sectionId);
}
