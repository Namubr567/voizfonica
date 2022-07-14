package com.example.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.entities.Userdetails;
import com.example.entities.Users;
@Repository
public interface Userdao extends JpaRepository<Users, Integer> {
//public Userdetails findbyEmail(String email);
}
