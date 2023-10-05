package com.ninjacart.cart.model;
import jakarta.persistence.Column;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="Products")
public class Product {

@Id	
@GeneratedValue(strategy=GenerationType.IDENTITY)
private Long id;

@Column(name="PRODUCT_NAME")
private String product_name;

@Column(name="PRICE")
private Float price;

public Long getid() {
	return id;
}

public void setid(Long id) {
	this.id = id;
}

public String getProduct_name() {
	return product_name;
}

public void setProduct_name(String product_name) {
	this.product_name = product_name;
}

public Float getPrice() {
	return price;
}

public void setPrice(Float price) {
	this.price = price;
}

public Product(Long id, String product_name, Float price) {
	super();
	this.id = id;
	this.product_name = product_name;
	this.price = price;
}
public Product() {
	
}

@Override
public String toString() {
	return "Products [id=" + id + ", product_name=" + product_name + ", price=" + price + "]";
}



}
