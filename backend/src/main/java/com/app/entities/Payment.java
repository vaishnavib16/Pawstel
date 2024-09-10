package com.app.entities;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.app.entityutils.PaymentMethod;
import com.app.entityutils.PaymentStatus;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "payment_details")
@Getter
@Setter
public class Payment {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer paymentId;


    @NotNull
    private LocalDate paymentDate;

    @NotNull
    @Enumerated(EnumType.STRING)
    private PaymentMethod paymentMethod;

    @NotNull
    @Enumerated(EnumType.STRING)
    private PaymentStatus paymentStatus;

    @NotNull
    private Integer totalAmount;

    @OneToOne
    @JoinColumn(name = "booking_id", nullable = false)
    private Booking booking;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User userId;

	public Payment() {
		super();
		this.setPaymentDate(LocalDate.now());
	}

    // Getters and Setters
    
    
}
