
package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AuthDTO;
import com.app.dto.UserDTO;
import com.app.service.UserService;

import io.swagger.v3.oas.models.responses.ApiResponse;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users") 
public class UserController {

    @Autowired
    private UserService userService;
    
    @PostMapping("/signin")
	public ResponseEntity<?> userSignIn(@RequestBody AuthDTO dto) {
		System.out.println("in sigin " + dto);
		try {			
			UserDTO respDto = userService.authenticateUser(dto);
			// => success , send resp pkt : SC 200 , resp body - user dto
			return ResponseEntity.ok(respDto);
		} catch (RuntimeException e) {
			//invalid login 
			System.out.println(e);
			// resp pkt - SC 404 api resp with err mesg
			return ResponseEntity.
					status(HttpStatus.NOT_FOUND).
					body(new ApiResponse());
		}

	}
    

    @PostMapping
    public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO) {
        UserDTO createdUser = userService.createUser(userDTO);
        return ResponseEntity.ok(createdUser);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<UserDTO>> getUserById(@PathVariable Integer id) {
        Optional<UserDTO> user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }

    @GetMapping
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        List<UserDTO> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable Integer id, @RequestBody UserDTO userDTO) {
        UserDTO updatedUser = userService.updateUser(id, userDTO);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Integer id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}

