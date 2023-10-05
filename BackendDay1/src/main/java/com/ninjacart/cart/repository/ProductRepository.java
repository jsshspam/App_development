package com.ninjacart.cart.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ninjacart.cart.model.Product;

public interface ProductRepository extends JpaRepository<Product,Long>{

}
