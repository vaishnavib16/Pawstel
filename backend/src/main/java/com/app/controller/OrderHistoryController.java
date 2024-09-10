package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.OrderHistoryDTO;
import com.app.service.OrderHistoryService;

@RestController
@RequestMapping("/api/order-history")
public class OrderHistoryController {

    @Autowired
    private OrderHistoryService orderHistoryService;

    // Create a new OrderHistory record
    @PostMapping
    public ResponseEntity<OrderHistoryDTO> createOrderHistory(@RequestBody OrderHistoryDTO orderHistoryDTO) {
        OrderHistoryDTO createdOrderHistory = orderHistoryService.createOrderHistory(orderHistoryDTO);
        return new ResponseEntity<>(createdOrderHistory, HttpStatus.CREATED);
    }

    // Retrieve an OrderHistory record by ID
    @GetMapping("/{id}")
    public ResponseEntity<OrderHistoryDTO> getOrderHistoryById(@PathVariable Integer id) {
        Optional<OrderHistoryDTO> orderHistoryDTO = orderHistoryService.getOrderHistoryById(id);
        return orderHistoryDTO.map(ResponseEntity::ok)
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Retrieve all OrderHistory records
    @GetMapping
    public ResponseEntity<List<OrderHistoryDTO>> getAllOrderHistories() {
        List<OrderHistoryDTO> orderHistories = orderHistoryService.getAllOrderHistories();
        return new ResponseEntity<>(orderHistories, HttpStatus.OK);
    }

    // Update an existing OrderHistory record
    @PutMapping("/{id}")
    public ResponseEntity<OrderHistoryDTO> updateOrderHistory(@PathVariable Integer id, @RequestBody OrderHistoryDTO orderHistoryDTO) {
        try {
            OrderHistoryDTO updatedOrderHistory = orderHistoryService.updateOrderHistory(id, orderHistoryDTO);
            return new ResponseEntity<>(updatedOrderHistory, HttpStatus.OK);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete an OrderHistory record
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrderHistory(@PathVariable Integer id) {
        try {
            orderHistoryService.deleteOrderHistory(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

