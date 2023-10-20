package com.example.my_restaurant.service;

import com.example.my_restaurant.model.Section;
import com.example.my_restaurant.repository.SectionRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class SectionServiceImpl implements SectionService {
    private final SectionRepository sectionRepository;

    @Override
    public Section creer(Section section) {
        return sectionRepository.save(section);
    }

    @Override
    public List<Section> lire() {
        return null;
    }

    @Override
    public Section modifier(Long id, Section section) {
        return sectionRepository.findById(id)
                .map(p ->{
                    p.setNom(section.getNom());
                    return sectionRepository.save(p);
                }).orElseThrow(()-> new RuntimeException("pas de section"));
    }

    @Override
    public String supprimer(Long id) {
        sectionRepository.deleteById(id);
        return "supprimé";
    }

    @Override
    public List<Section> lireAvecId(Long section) {
        return sectionRepository.findByMenuId(section);
    }
}
