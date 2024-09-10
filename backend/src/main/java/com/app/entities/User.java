package com.app.entities;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "users")

public class User {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    private String username;

    @NotNull
    @Size(min = 10)
    @Pattern(regexp = "^(?=.*[0-9])(?=.*[!@#$%^&*]).{10,}$")
    private String password;

    @NotNull
    private String firstName;

    @NotNull
    private String lastName;

    @NotNull
    @Email
    private String email;

    @NotNull
    @Size(min = 10, max = 10)
    private String phone;

    @NotNull
    private String address;

    
    private Role role;

    @NotNull
    private LocalDate creationDate;

	public User() {
		super();
		this.setCreationDate(LocalDate.now());
		this.role=Role.ROLE_USER;
	}
	


}
