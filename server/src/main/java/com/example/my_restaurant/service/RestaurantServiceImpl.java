package com.example.my_restaurant.service;

import com.example.my_restaurant.model.Configuration;
import com.example.my_restaurant.model.Restaurant;
import com.example.my_restaurant.repository.ConfigurationRepository;
import com.example.my_restaurant.repository.RestaurantRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class RestaurantServiceImpl implements RestaurantService{

    private final RestaurantRepository restaurantRepository;
    private final ConfigurationRepository configurationRepository;

    @Override
    public Restaurant creer(Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }


    @Override
    public List<Restaurant> lire() {
        return restaurantRepository.findAll();
    }

    @Override
    public Restaurant modifier(Long id, Restaurant restaurant) {
        return restaurantRepository.findById(id)
                .map(p-> {
                    p.setAdresse(restaurant.getAdresse());
                    //p.setConfiguration(restaurant.getConfiguration());
                    p.setInformationsContact(restaurant.getInformationsContact());
                    return restaurantRepository.save(p);
                }).orElseThrow(()-> new RuntimeException("Restaurant pas trouvé"));
    }

    @Override
    public String supprimer(Long id) {
        restaurantRepository.deleteById(id);
        return "restaurant supprimé";
    }

    @Override
    public Optional<Restaurant> lireAvecId(Long id) {
       return restaurantRepository.findByConfigurationId(id);
        //return restaurantRepository.findById(id);
    }
}
