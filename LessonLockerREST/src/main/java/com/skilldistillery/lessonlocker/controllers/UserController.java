package com.skilldistillery.lessonlocker.controllers;

import java.security.Principal;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.lessonlocker.entities.User;
import com.skilldistillery.lessonlocker.services.AuthService;
import com.skilldistillery.lessonlocker.services.UserService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin({"*", "http://localhost/"})
@RequestMapping("api")
public class UserController {
	
	private UserService userService;
	private AuthService authService;

	public UserController(UserService userService, AuthService authService) {
		super();
		this.userService = userService;
		this.authService = authService;
	}

	@GetMapping("users")
	public List<User> getAllUsers(HttpServletRequest req, HttpServletResponse res, Principal principal) {
		List<User> users = null;
		try {
			users = userService.getAllUsers(principal.getName());
		} catch (Exception e) {
			res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
			e.printStackTrace();
		}
		return users;
	}

}
