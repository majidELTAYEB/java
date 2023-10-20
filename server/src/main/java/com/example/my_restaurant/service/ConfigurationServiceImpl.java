package com.example.my_restaurant.service;

import com.example.my_restaurant.model.Configuration;
import com.example.my_restaurant.model.Restaurant;
import com.example.my_restaurant.repository.ConfigurationRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ConfigurationServiceImpl implements ConfigurationService {

    private final ConfigurationRepository configurationRepository;
    @Override
    public Configuration creer(Configuration configuration) {
        return configurationRepository.save(configuration);
    }

    @Override
    public List<Configuration> lire() {
       return configurationRepository.findAll();
    }

    @Override
    public Configuration modifier(Long id, Configuration configuration) {
        return configurationRepository.findById(id)
                .map(p ->{
                    p.setCouleurLiens(configuration.getCouleurLiens());
                    p.setMotDePasseAdmin(configuration.getMotDePasseAdmin());
                    p.setPhotoBanniere(configuration.getPhotoBanniere());
                    p.setUrlSite(configuration.getUrlSite());
                    p.setNomRestaurant(configuration.getNomRestaurant());
                    return configurationRepository.save(p);
                }).orElseThrow(()-> new RuntimeException("pas de config trouvé"));
    }

    @Override
    public String supprimer(Long id) {
        configurationRepository.deleteById(id);
        return "produit supprimé";
    }

    @Override
    public Optional<Configuration> lireAvecId(Long configurationId) {
        return Optional.ofNullable(configurationRepository.findById(configurationId)
                .orElseThrow(() -> new IllegalArgumentException("configuration not found for configuration ID: " + configurationId)));
    }

    @Override
    public Optional<Configuration> lireAvecUrlSite(String urlSite) {
        return configurationRepository.findByUrlSite(urlSite);
    }
}
