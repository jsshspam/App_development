package com.cartit.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cartit.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String username);

    User findByUid(Long uid);

}
