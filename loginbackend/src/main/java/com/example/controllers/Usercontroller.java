package com.example.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.ErrorClazz;
import com.example.entities.Userdetails;
import com.example.service.UserdetailsService;

@RestController
@RequestMapping("/userdetails")
@CrossOrigin(origins="http://localhost:4200")
	
public class Usercontroller {

	public Usercontroller() {
		System.out.println("<<<<<<<<USERCONTROLLER INSTANTIATED>>>>>>>>");
	}
	@Autowired
	private UserdetailsService userdetailsService;
	
	@PostMapping("/save")
	public ResponseEntity<?> saveUserdetails(@RequestBody Userdetails userdetails) {
		
		try {
			userdetails=userdetailsService.saveUserdetails(userdetails);
			return new ResponseEntity<Userdetails>(userdetails, HttpStatus.CREATED);
		}catch(Exception e) {
			ErrorClazz errorClazz=new ErrorClazz(500,e.getMessage());
			return new ResponseEntity<ErrorClazz>(errorClazz,HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
		@GetMapping("/alluserdetails")
	public ResponseEntity<?> getAllUserdetails(){
		try {
			List<Userdetails> userdetails=userdetailsService.getAllUserdetails();
			return new ResponseEntity<List<Userdetails>>(userdetails,HttpStatus.OK);
		}catch(Exception e) {
			ErrorClazz errorClazz=new ErrorClazz(500,e.getMessage());
			return new ResponseEntity<ErrorClazz>(errorClazz,HttpStatus.INTERNAL_SERVER_ERROR);
	}
	}
		@GetMapping("/getuserdetails/{id}")
		public ResponseEntity<?> getUserdetailsByID(@PathVariable int id){
			Optional<Userdetails> userdetails=null;
			try {
				userdetails =userdetailsService.getUserdetailsById(id);
				return new ResponseEntity<Optional<Userdetails>>(userdetails,HttpStatus.OK);
			}catch(Exception e) {
				ErrorClazz errorClazz=new ErrorClazz(500,e.getMessage());
				return new ResponseEntity<ErrorClazz>(errorClazz,HttpStatus.INTERNAL_SERVER_ERROR);
			}
	    }
		@PutMapping("/update")
		public ResponseEntity<?> updateuserdetails(@RequestBody Userdetails userdetails){
			try {
				userdetailsService.updateuserdetails(userdetails);
				return new ResponseEntity<Void>(HttpStatus.OK);
			}catch(Exception e) {
				ErrorClazz errorClazz=new ErrorClazz(500,e.getMessage());
				return new ResponseEntity<ErrorClazz>(errorClazz,HttpStatus.INTERNAL_SERVER_ERROR);
		}
		}
		@DeleteMapping("/delete/{id}")
		public ResponseEntity<?>deleteUserdetails(@PathVariable int id){
			try {
				userdetailsService.deleteUserdetails(id);
				return new ResponseEntity<Void>(HttpStatus.OK);
			}catch(Exception e) {
				ErrorClazz errorClazz=new ErrorClazz(500,e.getMessage());
				return new ResponseEntity<ErrorClazz>(errorClazz,HttpStatus.INTERNAL_SERVER_ERROR);
		}
		}
		
}
