package com.server.netflix.models;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document(collection = "users")
public class User {
    @Id
    private ObjectId _id;
    private String email;
    private String password;
    private String gender;
    private String location;
    private String fullName;
    private String avatar;
    private String phoneNumber;
    private boolean isAdmin;
    private boolean isDestroy;

    public User(String email, String password, String gender, String location, String fullName, String avatar, String phoneNumber, boolean isAdmin, boolean isDestroy) {
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.location = location;
        this.fullName = fullName;
        this.avatar = avatar;
        this.phoneNumber = phoneNumber;
        this.isAdmin = isAdmin;
        this.isDestroy = isDestroy;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
