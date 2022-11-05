package com.server.netflix.repositories;

import com.server.netflix.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    User findUserByEmail(String email);
}
