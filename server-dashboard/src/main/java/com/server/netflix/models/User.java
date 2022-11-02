package com.server.netflix.models;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "users")
public class User {
    @Id
    private ObjectId _id;
    @Indexed(unique = true)
    private String email;
    private String password;
    private String gender;
    private String location;
    private String fullName;
    private String avatar;
    private boolean isAdmin;
    private boolean isDestroy;

    public User(String email, String password, String gender, String location, String fullName, String avatar, boolean isAdmin, boolean isDestroy) {
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.location = location;
        this.fullName = fullName;
        this.avatar = avatar;
        this.isAdmin = isAdmin;
        this.isDestroy = isDestroy;
    }

    public ObjectId get_id() {
        return _id;
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }

    public boolean isDestroy() {
        return isDestroy;
    }

    public void setDestroy(boolean destroy) {
        isDestroy = destroy;
    }

    @Override
    public String toString() {
        return "User{" +
                "_id=" + _id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", gender='" + gender + '\'' +
                ", location='" + location + '\'' +
                ", fullName='" + fullName + '\'' +
                ", avatar='" + avatar + '\'' +
                ", isAdmin=" + isAdmin +
                ", isDestroy=" + isDestroy +
                '}';
    }
}
