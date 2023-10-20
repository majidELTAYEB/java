package com.example.my_restaurant.service;

import java.util.List;
import java.util.Optional;

import com.example.my_restaurant.model.Section;
public interface SectionService {
    Section creer (Section section);
    List<Section> lire();
    Section modifier(Long id, Section section);
    String supprimer(Long id);
    List<Section> lireAvecId(Long section);
}
