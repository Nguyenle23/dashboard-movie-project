package com.server.netflix.controllers;

import com.server.netflix.models.User;
import com.server.netflix.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin
public class UserController {
    private UserService userService;

    @GetMapping("/users")
    public List<User> getAllUser() {
        return userService.getAllUsers();
    }

    @GetMapping("/user/{email}")
    public User getUser(
            @PathVariable("email") String email
    ) {
        return userService.getUser(email);
    }

    @PostMapping("/user")
    public User createUser() {
        return userService.createUser();
    }

    @PutMapping("/user/update/{email}")
    public void updateEmail(
            @PathVariable("email") String email,
            @RequestParam(required = false) String fullName,
            @RequestParam(required = false) String phoneNumber
    ) {
        userService.updateUser(email, fullName, phoneNumber);
    }

    @DeleteMapping("/user/{email}")
    public void removeUser(@PathVariable("email") String email) {
        userService.deleteUser(email);
    }
}
