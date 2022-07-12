package com.example.service;

	import java.util.List;
	import java.util.Optional;

	import javax.transaction.Transactional;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;

import com.example.dao.Userdao;
import com.example.entities.Userdetails;
	@Service
	@Transactional
	public class UserdetailsService {
		
		public UserdetailsService() {
			System.out.println("<<<<<<<<USER SERVIVE INSTANTIATED>>>>>>>>");
		}
		@Autowired
		Userdao userdao;
	public Userdetails saveUserdetails(Userdetails userdetails) {
		userdao.save(userdetails);
		return userdetails;
	}
	public List<Userdetails> getAllUserdetails(){
		return userdao.findAll();
	}
	public Optional<Userdetails> getUserdetailsById(int id){
		return userdao.findById(id);
	}
	public Userdetails updateuserdetails(Userdetails userdetails) {
		return userdao.save(userdetails);
	}
	public void deleteUserdetails(int id) {
		userdao.deleteById(id);
	}
	}

