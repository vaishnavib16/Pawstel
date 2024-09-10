package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.OrderHistory;

@Repository
public interface OrderHistoryRepo extends JpaRepository<OrderHistory, Integer> {
    // Custom query methods can be defined here if needed
}

