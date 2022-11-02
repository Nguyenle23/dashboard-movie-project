package com.server.netflix.services;

import com.server.netflix.models.User;
import com.server.netflix.repositories.UserRepository;
import com.server.netflix.repositories.UserServiceRepository;
import lombok.AllArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@Transactional
public class UserServiceImpl implements UserServiceRepository {
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getUserById(ObjectId id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return userRepository.findById(id);
        } else {
            throw new IllegalStateException("User with id " + id + "does not exist");
        }
    }

    public User createUserAccount(User user){
        User checkEmail = userRepository.findUserByEmail(user.getEmail());
        if(checkEmail == null) {
            return userRepository.save(user);
        } else {
            throw new IllegalStateException("Email is existed");
        }
    }

    @Override
    public void updateUserAccount(User user) {
        Optional<User> checkUser = this.userRepository.findById(user.get_id());

        if (checkUser.isPresent()) {
            User userData = checkUser.get();
            userData.setEmail(user.getEmail());
            userData.setFullName(user.getFullName());
            userData.setPassword(user.getPassword());
            userData.setGender(user.getGender());
            userData.setLocation(user.getLocation());
            userData.setAvatar(user.getAvatar());
            userData.setDestroy(user.isDestroy());
            userData.setAdmin(user.isAdmin());
            userRepository.save(userData);
        } else {
            throw new IllegalStateException("User with id " + user.get_id() + "does not exist");
        }
    }

    public void deleteUser(ObjectId id) {
        Optional<User> checkUser = userRepository.findById(id);
        if (checkUser.isPresent()) {
            userRepository.deleteById(id);
        } else {
            throw new IllegalStateException("Cannot delete user with id " + id);
        }
    }
}
