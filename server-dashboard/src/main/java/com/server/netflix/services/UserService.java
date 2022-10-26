package com.server.netflix.services;

import com.server.netflix.models.User;
import com.server.netflix.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUser(String email) {
        return userRepository.findUserByEmail(email);
    }

    public User createUser(){
        return userRepository.insert(new User(
                "user1@gmail",
                "user1password",
                "user1gender",
                "user1VN",
                "user1 full name",
                "user1avatar",
                "0938685923",
                true,
                false
        ));
    }

    public void updateUser(String email, String fullName, String phoneNumber) {
        User user = userRepository.findUserByEmail(email);
        System.out.println(user);
        if(fullName != null && fullName.length() > 0) {
            user.setFullName(fullName);
        }
        if(phoneNumber != null && phoneNumber.length() > 0) {
            user.setPhoneNumber(phoneNumber);
        }
        System.out.println("update");
    }

    public void deleteUser(String email) {
        System.out.println("delete movie");
        userRepository.deleteUserByEmail(email);
    }
}
