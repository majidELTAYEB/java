package com.example.my_restaurant.service;


import java.util.List;
import java.util.Optional;

import com.example.my_restaurant.model.Configuration;

public interface ConfigurationService {
    Configuration creer (Configuration configuration);
    List<Configuration> lire();
    Configuration modifier(Long id, Configuration configuration);
    String supprimer(Long id);
    Optional<Configuration> lireAvecId(Long configurationId);

    Optional<Configuration> lireAvecUrlSite(String urlSite);
}
