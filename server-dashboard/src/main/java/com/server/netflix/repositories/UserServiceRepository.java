package com.server.netflix.repositories;

import com.server.netflix.models.User;

import java.util.List;
import java.util.Optional;

public interface UserServiceRepository {
    User createUserAccount(User user);

    List<User> getAllUsers();

    Optional<User> getUserById(String id);

    void updateUserAccount(User user);

    void deleteUser(String id);
}
