package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.PetDTO;

public interface PetService {
    PetDTO createPet(PetDTO petDTO);

    Optional<PetDTO> getPetById(Integer id);

    List<PetDTO> getAllPets();

    PetDTO updatePet(Integer id, PetDTO petDTO);

    void deletePet(Integer id);

	Optional<PetDTO> getPetByName(String name);

}
