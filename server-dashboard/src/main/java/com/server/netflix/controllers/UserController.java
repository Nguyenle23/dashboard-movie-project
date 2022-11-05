package com.server.netflix.controllers;

import com.server.netflix.models.User;
import com.server.netflix.services.UserServiceImpl;
import lombok.AllArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@CrossOrigin
public class UserController {
    private UserServiceImpl userServiceImpl;

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userServiceImpl.getAllUsers();
    }

    @GetMapping("/user/{id}")
    public Optional<User> getUser(
            @PathVariable("id") String id
    ) {
        return userServiceImpl.getUserById(id);
    }

    @PostMapping("/user")
    public User createUser(
            @RequestBody User user
    ) {
        return userServiceImpl.createUserAccount(user);
    }

    @PutMapping("/user/update/{id}")
    public void updateEmail(
            @PathVariable("id") String id,
            @RequestBody User user
    ) {
        user.set_id(id);
        userServiceImpl.updateUserAccount(user);
    }

    @DeleteMapping("/user/{id}")
    public void removeUser(@PathVariable("id") String id) {
        userServiceImpl.deleteUser(id);
    }
}
