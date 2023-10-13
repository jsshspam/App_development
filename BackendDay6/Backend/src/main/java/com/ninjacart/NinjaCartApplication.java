package com.ninjacart;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@OpenAPIDefinition(
		info =@Info(
				title = "Ninjacart",
				version = "1.1.2",
				description = "Online Delivery System Website Backend",
				contact = @Contact(
						name = "Aditya",
						email = "aditya.k0907@gmail.com"
						)
				)
		)

@SpringBootApplication
public class NinjaCartApplication {

	public static void main(String[] args) {
		SpringApplication.run(NinjaCartApplication.class, args);
	}

}
