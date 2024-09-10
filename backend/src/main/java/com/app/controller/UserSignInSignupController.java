package com.app.controller;

import java.util.stream.Collectors;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AuthResponse;
import com.app.dto.SigninRequest;
import com.app.dto.SigninResponse;
import com.app.dto.UserDTO;
import com.app.entities.Role;
import com.app.entities.User;
import com.app.security.CustomUserDetails;
import com.app.security.JwtUtils;
import com.app.service.UserService;

@RestController
@RequestMapping("/users")
public class UserSignInSignupController {
	@Autowired
	private UserService userService;

	
	@Autowired
	private ModelMapper mapper;

	
	@Autowired
	private JwtUtils jwtUtils;

	@Autowired
	private AuthenticationManager authMgr;

	// sign up
	/*
	 * URL - http://host:port/users/signup Method - POST request payload : sign up
	 * DTO (user details) resp : In case of success : Auth Resp DTO :mesg + JWT
	 * token + SC 201 In case of failure : SC 401
	 * 
	 */
	@PostMapping("/signup")
	public ResponseEntity<?> userSignup(@RequestBody @Valid UserDTO dto) {
		System.out.println("in sign up " + dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.createUser(dto));
	}

	/*
	 * URL - http://host:port/users/signin Method - POST request payload : Auth req
	 * DTO : email n password resp : In case of success : Auth Resp DTO :mesg + JWT
	 * token + SC 201 In case of failure : SC 401
	 * 
	 */
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody @Valid SigninRequest request) {
		System.out.println("in sign in" + request);
		// 1. create a token(implementation of Authentication i/f)
		// to store un verified user email n pwd
		UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(request.getEmail(),
				request.getPassword());
		//2.  invoke auth mgr's authenticate method;
		Authentication verifiedToken = authMgr.authenticate(token);
		CustomUserDetails customUserDetails = (CustomUserDetails) verifiedToken.getPrincipal();
		User user = customUserDetails.getUser();
		var roleList = verifiedToken.getAuthorities().stream().map(GrantedAuthority::getAuthority)
				.collect(Collectors.toSet());
		AuthResponse authResponse = new AuthResponse();
		roleList.forEach(role -> {
			authResponse.getUserRoles().add(Role.valueOf(role));
		});
		authResponse.setJwtToken(jwtUtils.generateJwtToken(verifiedToken));
		authResponse.setMessage("Authentication Successfull !!");
		mapper.map(user, authResponse);
			// => authentication n authorization successful !
			//3. In case of successful auth,  create JWT n send it to the clnt in response
		//SigninResponse resp = new SigninResponse(jwtUtils.generateJwtToken(verifiedToken), "Successful Auth!!!!");
		return ResponseEntity.status(HttpStatus.OK).body(authResponse);
	}

}
