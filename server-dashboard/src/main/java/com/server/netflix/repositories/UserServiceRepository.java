package com.server.netflix.repositories;

import com.server.netflix.models.User;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Optional;

public interface UserServiceRepository {
    User createUserAccount(User user);

    List<User> getAllUsers();

    Optional<User> getUserById(ObjectId id);

    void updateUserAccount(User user);

    void deleteUser(ObjectId id);
}
