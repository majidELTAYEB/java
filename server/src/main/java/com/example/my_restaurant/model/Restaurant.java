package com.example.my_restaurant.model;
import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "restaurant")
@Getter
@Setter
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType. IDENTITY)
    private Long id;

    //@JsonIgnore
    //@OneToOne
    //@JoinColumn(name = "configuration_id")
    //private Configuration configuration;

    //@JsonIgnore
    //@OneToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "configuration_id")
    //private Configuration configuration;

    //@OneToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "configuration_id")
    //@JsonBackReference
    //private Configuration configuration;


   // @OneToOne()
   // @JoinColumn(name = "configuration_id")
   // private Configuration configuration;

    @OneToOne
    private Configuration configuration;



    @Column(name = "adresse")
    private String adresse;

    @Column(name = "informations_contact")
    private String informationsContact;

    @JsonIgnore
    @OneToMany(mappedBy = "restaurant")
    private List<Menu> menus;

    @JsonIgnore
    @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> reviews;

}
