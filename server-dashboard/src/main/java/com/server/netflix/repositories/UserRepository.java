package com.server.netflix.repositories;

import com.server.netflix.models.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, ObjectId> {
    User findUserByEmail(String email);

    User deleteUserByEmail(String email);
}
