package com.app.dto;
import java.time.LocalDate;

import javax.validation.constraints.NotNull;

import com.app.entityutils.OrderStatus;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderHistoryDTO {

	private Integer orderId;
    private LocalDate creationDate;

    @NotNull(message = "Order status cannot be null")
    private OrderStatus orderStatus;

    @NotNull(message = "Booking ID cannot be null")
    private Integer bookingId;

    // Getters and Setters
}
