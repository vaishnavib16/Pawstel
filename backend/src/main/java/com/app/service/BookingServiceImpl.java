package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.BookingDTO;
import com.app.entities.Booking;
import com.app.entities.Pet;
import com.app.repository.BookingRepo;
import com.app.repository.PetRepo;


@Service
@Transactional
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepo bookingRepository;

    @Autowired
    private PetRepo petRepository;

    @Autowired
    private ModelMapper modelMapper;

    public BookingDTO createBooking(BookingDTO bookingDTO) {
        // Find the Pet entity by ID
        Optional<Pet> petOpt = petRepository.findById(bookingDTO.getPetId());
        if (!petOpt.isPresent()) {
            throw new RuntimeException("Pet not found with ID: " + bookingDTO.getPetId());
        }
        
        Pet pet = petOpt.get();

        // Convert DTO to Entity
        Booking booking = modelMapper.map(bookingDTO, Booking.class);
        booking.setPet(pet);
        
        // Save the booking entity
        Booking savedBooking = bookingRepository.save(booking);
        
        // Convert saved entity back to DTO
        return modelMapper.map(savedBooking, BookingDTO.class);
    }

    public BookingDTO updateBooking(Integer bookingId, BookingDTO bookingDTO) {
        Optional<Booking> bookingOpt = bookingRepository.findById(bookingId);
        if (!bookingOpt.isPresent()) {
            throw new RuntimeException("Booking not found with ID: " + bookingId);
        }

        Booking booking = bookingOpt.get();
        modelMapper.map(bookingDTO, booking);

        // Handle pet association
        if (bookingDTO.getPetId() != null) {
            Optional<Pet> petOpt = petRepository.findById(bookingDTO.getPetId());
            if (!petOpt.isPresent()) {
                throw new RuntimeException("Pet not found with ID: " + bookingDTO.getPetId());
            }
            booking.setPet(petOpt.get());
        }

        Booking updatedBooking = bookingRepository.save(booking);
        return modelMapper.map(updatedBooking, BookingDTO.class);
    }

    public BookingDTO getBookingById(Integer bookingId) {
        Optional<Booking> bookingOpt = bookingRepository.findById(bookingId);
        if (!bookingOpt.isPresent()) {
            throw new RuntimeException("Booking not found with ID: " + bookingId);
        }
        return modelMapper.map(bookingOpt.get(), BookingDTO.class);
    }

    public void deleteBooking(Integer bookingId) {
        if (!bookingRepository.existsById(bookingId)) {
            throw new RuntimeException("Booking not found with ID: " + bookingId);
        }
        bookingRepository.deleteById(bookingId);
    }

    public List<BookingDTO> getAllBookings() {
        List<Booking> bookings = bookingRepository.findAll();
        return bookings.stream()
                       .map(booking -> modelMapper.map(booking, BookingDTO.class))
                       .collect(Collectors.toList());
    }
}
