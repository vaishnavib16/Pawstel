package com.app.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

//firstname , last name,phone no , dob
@Getter
@Setter
public class UserRespDTO extends BaseDTO{
		private String firstName;
		private String lastName;
		private LocalDate dob;
		private String phoneNo;
}
