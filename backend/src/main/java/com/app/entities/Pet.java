package com.app.entities;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "pets")
public class Pet {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer petId;

    @NotNull
    @Pattern(regexp = "^[a-zA-Z]+$")
    private String petName;

    @NotNull
    @Pattern(regexp = "^[a-zA-Z]+$")
    private String category;

    @Min(0)
    @Max(20)
    private Integer age;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    
    private LocalDate updatedOn;

    @NotNull
    private LocalDate creationDate;

	public Pet() {
		super();
		this.setCreationDate(LocalDate.now());
		this.setUpdatedOn(updatedOn);
	}

    
    // Getters and Setters
}
