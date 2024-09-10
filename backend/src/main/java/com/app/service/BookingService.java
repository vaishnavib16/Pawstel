package com.app.service;

import java.util.List;

import com.app.dto.BookingDTO;

public interface BookingService {

    BookingDTO createBooking(BookingDTO bookingDTO);

    BookingDTO getBookingById(Integer bookingId);

    List<BookingDTO> getAllBookings();

    BookingDTO updateBooking(Integer bookingId, BookingDTO bookingDTO);

    void deleteBooking(Integer bookingId);
}
