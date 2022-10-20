package com.server.netflix.models;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "movies")
public class Movie {
    @Id
    private ObjectId _id;
    private String title;
    private String img;
    private boolean isSeries;
    private boolean isDestroy;
    private String description;
    private String genre;
    private String imgTitle;
    private String limit;
    private String thumbnail;
    private String trailer;
    private String video;
    private String year;
    private String duration;
    public Movie(String title, String img, boolean isSeries, boolean isDestroy, String description, String genre, String imgTitle, String limit, String thumbnail, String trailer, String video, String year, String duration) {
        this.title = title;
        this.img = img;
        this.isSeries = isSeries;
        this.isDestroy = isDestroy;
        this.description = description;
        this.genre = genre;
        this.imgTitle = imgTitle;
        this.limit = limit;
        this.thumbnail = thumbnail;
        this.trailer = trailer;
        this.video = video;
        this.year = year;
        this.duration = duration;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }


    public void setLimit(String limit) {
        this.limit = limit;
    }
}
