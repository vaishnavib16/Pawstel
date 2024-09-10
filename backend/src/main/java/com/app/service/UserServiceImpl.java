package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.dto.AuthDTO;
import com.app.dto.UserDTO;
import com.app.entities.User;
import com.app.repository.UserRepo;


@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo UserRepo;

    @Autowired
    private ModelMapper modelMapper;
    @Autowired
	private PasswordEncoder encoder;
    
    @Override
	public UserDTO authenticateUser(AuthDTO dto) {
		// 1. pass em n pass to repo's method
		User user = UserRepo.
		findByEmailAndPassword(dto.getEmail(), dto.getPassword())
				.orElseThrow(() -> 
				new BadCredentialsException("Invalid email or password !!!"));
		//map entity -> DTO
		return modelMapper.map(user, UserDTO.class);
	}
    
    @Override
    public UserDTO createUser(UserDTO userDTO) {
        User user = modelMapper.map(userDTO, User.class);
        user.setCreationDate(java.time.LocalDate.now());
        user.setPassword(encoder.encode(user.getPassword()));//pwd : encrypted using SHA
        User savedUser = UserRepo.save(user);
        return modelMapper.map(savedUser, UserDTO.class);
    }

    @Override
    public Optional<UserDTO> getUserById(Integer id) {
        return UserRepo.findById(id)
                             .map(user -> modelMapper.map(user, UserDTO.class));
    }

    @Override
    public List<UserDTO> getAllUsers() {
        return UserRepo.findAll()
                             .stream()
                             .map(user -> modelMapper.map(user, UserDTO.class))
                             .collect(Collectors.toList());
    }

    @Override
    public UserDTO updateUser(Integer id, UserDTO userDTO) {
        Optional<User> optionalUser = UserRepo.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            modelMapper.map(userDTO, user);
            User updatedUser = UserRepo.save(user);
            return modelMapper.map(updatedUser, UserDTO.class);
        } else {
            throw new RuntimeException("User not found with id " + id);
        }
    }

    @Override
    public void deleteUser(Integer id) {
        if (UserRepo.existsById(id)) {
            UserRepo.deleteById(id);
        } else {
            throw new RuntimeException("User not found with id " + id);
        }
    }
}