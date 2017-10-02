package com.websystique.springboot.service;


import com.websystique.springboot.model.Login;

public interface LoginService {

	Login findByUsername(String username);

}
