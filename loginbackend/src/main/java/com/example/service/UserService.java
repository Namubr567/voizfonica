package com.example.service;


import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.ContactUsdao;
import com.example.dao.NewUserDao;
import com.example.dao.Userdao;
import com.example.entities.ContactUs;
import com.example.entities.Userdetails;
import com.example.entities.Users;


@Service
@Transactional
public class UserService {
	

		public UserService() {
			System.out.println("<<<<<<<<<<<<<<<POST SERVICE INSTANTIATED>>>>>>>>>>>>>>>>>>>>>>>>>");
		}
		
		@Autowired
		NewUserDao newUserDao;
		
		@Autowired
		ContactUsdao contactus;
		
		@Autowired
		Userdao userdao;
		
		public Users saveUser(Users userData) {
			return newUserDao.save(userData);

		}
		public Users findByEmailId(String email) {
			return newUserDao.findByEmail(email);
//			return ((UserService) newUserDao).findByEmail(email);			
		}

		public ContactUs saveContact(ContactUs userData) {
			contactus.save(userData);
			return userData;
		}
		
	public Users saveUserdetails(Users userdetails) {
		userdao.save(userdetails);
		return userdetails;
	}
	public List<Users> getAllUserdetails(){
		return userdao.findAll();
	}
	public Optional<Users> getUserdetailsById(int id){
		return userdao.findById(id);
	}
	public Users updateuserdetails(Users userdetails) {
		return userdao.save(userdetails);
	}
	public void deleteUserdetails(int id) {
		userdao.deleteById(id);
	}
	}