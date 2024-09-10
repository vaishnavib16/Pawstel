package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.User;


@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
    // Custom query methods can be defined here if needed
	Optional<User> findByEmailAndPassword(String em,String pass);
	
	Optional<User> findByEmail(String email);
	//derived query metho
	boolean existsByEmail(String email);
}
