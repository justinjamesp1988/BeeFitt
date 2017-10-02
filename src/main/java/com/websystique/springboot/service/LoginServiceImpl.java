package com.websystique.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.websystique.springboot.model.Login;
import com.websystique.springboot.repositories.LoginRepository;

@Service("loginService")
@Transactional
public class LoginServiceImpl implements LoginService{

	@Autowired
	private LoginRepository loginRepository;

	public Login findByUsername(String username) {
		return loginRepository.findByUsername(username);
	}


}