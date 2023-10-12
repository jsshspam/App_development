package com.cartit.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cartit.model.Warddetails;

@Repository
public interface WarddetailsRepo extends JpaRepository<Warddetails,Long>{

	
}