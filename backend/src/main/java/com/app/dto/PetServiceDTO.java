package com.app.dto;
import javax.validation.constraints.NotNull;

import com.app.entityutils.PetServices;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PetServiceDTO {
	
    @NotNull(message = "Service name cannot be null")
    private PetServices serviceName;

    private Integer bookingId;
    // Getters and Setters
}
