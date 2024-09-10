package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.OrderHistoryDTO;

public interface OrderHistoryService {
	  // Create a new OrderHistory record
    OrderHistoryDTO createOrderHistory(OrderHistoryDTO orderHistoryDTO);

    // Retrieve an OrderHistory record by ID
    Optional<OrderHistoryDTO> getOrderHistoryById(Integer orderId);

    // Retrieve all OrderHistory records
    List<OrderHistoryDTO> getAllOrderHistories();

    // Update an existing OrderHistory record
    OrderHistoryDTO updateOrderHistory(Integer orderId, OrderHistoryDTO orderHistoryDTO);

    // Delete an OrderHistory record
    void deleteOrderHistory(Integer orderId);

}
