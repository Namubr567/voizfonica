package com.example.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entities.ContactUs;

public interface ContactUsdao extends JpaRepository<ContactUs, Integer> {

	//void save(ContactUs userData);

}
