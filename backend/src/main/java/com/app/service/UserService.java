package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.AuthDTO;
import com.app.dto.UserDTO;

public interface UserService {
	UserDTO authenticateUser(AuthDTO dto);
	UserDTO createUser(UserDTO userDTO);
    Optional<UserDTO> getUserById(Integer id);
    List<UserDTO> getAllUsers();
    UserDTO updateUser(Integer id, UserDTO userDTO);
    void deleteUser(Integer id);

}
