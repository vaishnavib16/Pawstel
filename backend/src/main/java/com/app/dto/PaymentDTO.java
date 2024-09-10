package com.app.dto;
import java.time.LocalDate;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import com.app.entityutils.PaymentMethod;
import com.app.entityutils.PaymentStatus;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PaymentDTO {

	private Integer paymentId;
    private LocalDate creationDate;

    @NotNull(message = "Payment Date cannot be null")
    private LocalDate paymentDate;

    @NotNull(message = "Payment method cannot be null")
    private PaymentMethod paymentMethod;

    @NotNull(message = "Payment status cannot be null")
    private PaymentStatus paymentStatus;

    @Min(value = 0, message = "Total amount must be greater than or equal to 0")
    @Max(value = 50, message = "Total amount must be less than or equal to 50")
    private Integer totalAmount;

    @NotNull(message = "Booking ID cannot be null")
    private Integer bookingId;

    @NotNull(message = "User ID cannot be null")
    private Integer userId;

    // Getters and Setters
}
