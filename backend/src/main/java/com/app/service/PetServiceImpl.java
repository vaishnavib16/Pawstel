package com.app.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.PetDTO;
import com.app.entities.Pet;
import com.app.entities.User;
import com.app.repository.*;

@Service
@Transactional
public class PetServiceImpl implements PetService {

    @Autowired
    private PetRepo PetRepo;

    @Autowired
    private  UserRepo  UserRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public PetDTO createPet(PetDTO petDTO) {
        Pet pet = modelMapper.map(petDTO, Pet.class);
        Optional<User> user =  UserRepo.findById(petDTO.getId());
        if (user.isPresent()) {
            pet.setUser(user.get());
            pet.setCreationDate(LocalDate.now());
            Pet savedPet = PetRepo.save(pet);
            return modelMapper.map(savedPet, PetDTO.class);
        } else {
            throw new RuntimeException("User not found with id " + petDTO.getId());
        }
    }

    @Override
    public Optional<PetDTO> getPetById(Integer id) {
        return PetRepo.findById(id)
                             .map(pet -> modelMapper.map(pet, PetDTO.class));
    }

    @Override
    public List<PetDTO> getAllPets() {
        return PetRepo.findAll()
                             .stream()
                             .map(pet -> modelMapper.map(pet, PetDTO.class))
                             .collect(Collectors.toList());
    }

    @Override
    public PetDTO updatePet(Integer id, PetDTO petDTO) {
        Optional<Pet> optionalPet = PetRepo.findById(id);
        if (optionalPet.isPresent()) {
            Pet pet = optionalPet.get();
            modelMapper.map(petDTO, pet);
            pet.setUpdatedOn(LocalDate.now());
            Pet updatedPet = PetRepo.save(pet);
            return modelMapper.map(updatedPet, PetDTO.class);
        } else {
            throw new RuntimeException("Pet not found with id " + id);
        }
    }

    @Override
    public void deletePet(Integer id) {
        if (PetRepo.existsById(id)) {
            PetRepo.deleteById(id);
        } else {
            throw new RuntimeException("Pet not found with id " + id);
        }
    }

	@Override
	public Optional<PetDTO> getPetByName(String name) {
		// TODO Auto-generated method stub
		return PetRepo.findByPetName(name)
                .map(pet -> modelMapper.map(pet, PetDTO.class));
		
	}
}