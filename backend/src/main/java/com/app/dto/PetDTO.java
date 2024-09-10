package com.app.dto;
import java.time.LocalDate;


import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PetDTO {

	private Integer petId;
	
	
    @NotNull(message = "Pet name cannot be null")
    @Pattern(regexp = "^[a-zA-Z]+$", message = "Pet name must contain only characters")
    private String petName;

    @NotNull(message = "category cannot be null")
    @Pattern(regexp = "^[a-zA-Z]+$", message = "Breed must contain only characters")
    private String category;

    @Min(value = 0, message = "Age must be greater than or equal to 0")
    @Max(value = 25, message = "Age must be less than or equal to 25")
    private Integer age;

    @NotNull(message = "User ID cannot be null")
    private Integer id;

    @JsonProperty(access=Access.READ_ONLY)
    private LocalDate upDatedOn;
    @JsonProperty(access=Access.READ_ONLY)
    private LocalDate creationDate;
    
	

    
    // Getters and Setters
}
