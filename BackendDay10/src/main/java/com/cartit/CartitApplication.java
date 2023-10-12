package com.cartit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@OpenAPIDefinition(
		info =@Info(
				title = "CARTit",
				version = "1.1.2",
				description = "E-Delivery System",
				contact = @Contact(
						name = "Jashwanth D",
						email = "jashwanth2004@gmail.com"
						)
				)
		)

@SpringBootApplication
public class CartitApplication {

	public static void main(String[] args) {
		SpringApplication.run(CartitApplication.class, args);
	}

}
