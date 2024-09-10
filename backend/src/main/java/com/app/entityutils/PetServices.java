package com.app.entityutils;

public enum PetServices {

	GROOMING(500),
    SPA(700),
    HAIRCUT(300),
    DOG_WALK(500),
	HOSTEL(500);

    private final int price;

    PetServices(int price) {
        this.price = price;
    }

    public int getPrice() {
        return price;
    }

}
