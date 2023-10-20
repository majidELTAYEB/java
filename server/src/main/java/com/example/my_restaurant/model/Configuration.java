package com.example.my_restaurant.model;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "configuration")
@Getter
@Setter
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Configuration {

    @Id
    @GeneratedValue(strategy = GenerationType. IDENTITY)
    private Long id;

    @Column(name = "nom_restaurant")
    private String nomRestaurant;

    @Column(name = "url_site")
    private String urlSite;

    @Column(name = "couleur_liens")
    private String couleurLiens;

    @Column(name = "photo_banniere")
    private String photoBanniere;

    @Column(name = "mot_de_passe_admin")
    private String motDePasseAdmin;

    @JsonIgnore
    @OneToOne(mappedBy="configuration")
    private Restaurant restaurant;

    //@OneToOne(cascade = CascadeType.ALL, mappedBy = "configuration")
    //@JsonManagedReference
    //private Restaurant restaurant;

   // @OneToOne(cascade = CascadeType.ALL)
   // @JoinColumn(name = "restaurant_id")
   // @JsonBackReference
   // private Restaurant restaurant;


    //@OneToOne(cascade = CascadeType.ALL, mappedBy = "configuration")
    //@JsonManagedReference
    //private Restaurant restaurant;


}