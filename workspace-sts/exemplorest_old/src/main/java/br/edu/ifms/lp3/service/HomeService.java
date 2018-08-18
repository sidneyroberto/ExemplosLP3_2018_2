package br.edu.ifms.lp3.service;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HomeService {

	@GetMapping
	public String hello() {
		return "Hello!";
	}
}
