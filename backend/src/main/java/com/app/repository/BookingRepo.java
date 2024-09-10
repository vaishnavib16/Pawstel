package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Booking;

@Repository
public interface BookingRepo extends JpaRepository<Booking, Integer> {
    // Custom query methods can be defined here if needed
}
