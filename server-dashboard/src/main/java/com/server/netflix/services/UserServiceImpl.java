package com.server.netflix.services;

import com.server.netflix.models.User;
import com.server.netflix.repositories.UserRepository;
import com.server.netflix.repositories.UserServiceRepository;
import lombok.AllArgsConstructor;
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
    public Optional<User> getUserById(String id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return userRepository.findById(id);
        } else {
            throw new IllegalStateException("User with id " + id + " does not exist");
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
        Optional<User> findUser = this.userRepository.findById(user.get_id());
        User updateUser = findUser.get();
        if (findUser.isPresent()) {
            if (user.getEmail() != null) {
                updateUser.setEmail(user.getEmail());
                userRepository.save(updateUser);
            }
            if (user.getFullName() != null) {
                updateUser.setFullName(user.getFullName());
                userRepository.save(updateUser);
            }
            if (user.getPassword() != null) {
                updateUser.setPassword(user.getPassword());
                userRepository.save(updateUser);
            }
            if (user.getGender() != null) {
                updateUser.setGender(user.getGender());
                userRepository.save(updateUser);
            }
            if (user.getLocation() != null) {
                updateUser.setLocation(user.getLocation());
                userRepository.save(updateUser);
            }
            if (user.getAvatar() != null) {
                updateUser.setAvatar(user.getAvatar());
                userRepository.save(updateUser);
            }
            if (user.getFullName() != null) {
                updateUser.setFullName(user.getFullName());
                userRepository.save(updateUser);
            }
            if (user.isAdmin() != false) {
                updateUser.setAdmin(!user.isAdmin());
                userRepository.save(updateUser);
            } else {
                updateUser.setAdmin(user.isAdmin());
                userRepository.save(updateUser);
            }
            if (user.isDestroy() != false) {
                updateUser.setDestroy(!user.isDestroy());
                userRepository.save(updateUser);
            } else {
                updateUser.setDestroy(user.isDestroy());
                userRepository.save(updateUser);
            }
            userRepository.save(updateUser);
        } else {
            throw new IllegalStateException("User with id " + user.get_id() + "does not exist");
        }
    }

    public void deleteUser(String id) {
        Optional<User> checkUser = userRepository.findById(id);
        if (checkUser.isPresent()) {
            userRepository.deleteById(id);
        } else {
            throw new IllegalStateException("Cannot delete user with id " + id);
        }
    }
}
