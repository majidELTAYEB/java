package com.example.my_restaurant.service;

import com.example.my_restaurant.model.Plat;
import com.example.my_restaurant.repository.PlatRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class PlatServiceImpl implements PlatService{
    private final PlatRepository platRepository;
    @Override
    public Plat creer(Plat plat) {
        return platRepository.save(plat);
    }

    @Override
    public List<Plat> lire() {
        return null;
    }

    @Override
    public Plat modifier(Long id, Plat plat) {
        return platRepository.findById(id)
                .map(p ->{
                    p.setAllergenes(plat.getAllergenes());
                    p.setDescription(plat.getDescription());
                    p.setPrix(plat.getPrix());
                    p.setNom(plat.getNom());
                    p.setPhoto(plat.getPhoto());
                    return platRepository.save(p);
                }).orElseThrow(()-> new RuntimeException("pas de plat"));
    }

    @Override
    public String supprimer(Long id) {
        platRepository.deleteById(id);
        return "supprimé";
    }

    @Override
    public List<Plat> lireAvecId(Long sectionId) {
        return platRepository.findBySectionId(sectionId);
    }
}
