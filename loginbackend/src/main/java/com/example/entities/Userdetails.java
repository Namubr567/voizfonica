package com.example.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Userdetails {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
private String email;
private String password;
public Userdetails(int id, String email, String password) {
	super();
	this.id = id;
	this.email = email;
	this.password = password;
}
public Userdetails() {
	super();
	// TODO Auto-generated constructor stub
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
}
