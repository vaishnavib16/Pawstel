package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.OrderHistoryDTO;
import com.app.entities.OrderHistory;
import com.app.repository.BookingRepo;
import com.app.repository.OrderHistoryRepo;

@Service
@Transactional
public class OrderHistoryServiceImpl implements OrderHistoryService {
	  @Autowired
	    private OrderHistoryRepo orderHistoryRepository;

	    @Autowired
	    private BookingRepo bookingRepository;

	    @Autowired
	    private ModelMapper modelMapper;

	    @Override
	    public OrderHistoryDTO createOrderHistory(OrderHistoryDTO orderHistoryDTO) {
	        OrderHistory orderHistory = modelMapper.map(orderHistoryDTO, OrderHistory.class);
	        orderHistory.setBooking(bookingRepository.findById(orderHistoryDTO.getBookingId())
	                .orElseThrow(() -> new ResourceNotFoundException("Booking not found with id " + orderHistoryDTO.getBookingId())));
	        OrderHistory savedOrderHistory = orderHistoryRepository.save(orderHistory);
	        return modelMapper.map(savedOrderHistory, OrderHistoryDTO.class);
	    }

	    @Override
	    public Optional<OrderHistoryDTO> getOrderHistoryById(Integer orderId) {
	        return orderHistoryRepository.findById(orderId)
	                .map(orderHistory -> modelMapper.map(orderHistory, OrderHistoryDTO.class));
	    }

	    @Override
	    public List<OrderHistoryDTO> getAllOrderHistories() {
	        return orderHistoryRepository.findAll().stream()
	                .map(orderHistory -> modelMapper.map(orderHistory, OrderHistoryDTO.class))
	                .collect(Collectors.toList());
	    }

	    @Override
	    public OrderHistoryDTO updateOrderHistory(Integer orderId, OrderHistoryDTO orderHistoryDTO) {
	        return orderHistoryRepository.findById(orderId).map(orderHistory -> {
	            orderHistory.setOrderStatus(orderHistoryDTO.getOrderStatus());
	            orderHistory.setBooking(bookingRepository.findById(orderHistoryDTO.getBookingId())
	                    .orElseThrow(() -> new ResourceNotFoundException("Booking not found with id " + orderHistoryDTO.getBookingId())));
	            OrderHistory updatedOrderHistory = orderHistoryRepository.save(orderHistory);
	            return modelMapper.map(updatedOrderHistory, OrderHistoryDTO.class);
	        }).orElseThrow(() -> new ResourceNotFoundException("OrderHistory not found with id " + orderId));
	    }

	    @Override
	    public void deleteOrderHistory(Integer orderId) {
	        orderHistoryRepository.deleteById(orderId);
	    }

}
