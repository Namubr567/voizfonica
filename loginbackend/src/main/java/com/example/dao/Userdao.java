package com.example.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.entities.Userdetails;
@Repository
public interface Userdao extends JpaRepository<Userdetails, Integer> {

}
