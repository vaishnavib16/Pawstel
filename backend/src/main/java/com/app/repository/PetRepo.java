package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Pet;

@Repository
public interface PetRepo extends JpaRepository<Pet, Integer> {

	Optional<Pet> findByPetName(String name);
    // Custom query methods can be defined here if needed
}

