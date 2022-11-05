package com.server.netflix.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "movies")
public class Movie {
    @Id
    private String _id;
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

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public boolean isSeries() {
        return isSeries;
    }

    public void setSeries(boolean series) {
        isSeries = series;
    }

    public boolean isDestroy() {
        return isDestroy;
    }

    public void setDestroy(boolean destroy) {
        isDestroy = destroy;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getImgTitle() {
        return imgTitle;
    }

    public void setImgTitle(String imgTitle) {
        this.imgTitle = imgTitle;
    }

    public String getLimit() {
        return limit;
    }

    public void setLimit(String limit) {
        this.limit = limit;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public String getTrailer() {
        return trailer;
    }

    public void setTrailer(String trailer) {
        this.trailer = trailer;
    }

    public String getVideo() {
        return video;
    }

    public void setVideo(String video) {
        this.video = video;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    @Override
    public String toString() {
        return "Movie{" +
                "_id=" + _id +
                ", title='" + title + '\'' +
                ", img='" + img + '\'' +
                ", isSeries=" + isSeries +
                ", isDestroy=" + isDestroy +
                ", description='" + description + '\'' +
                ", genre='" + genre + '\'' +
                ", imgTitle='" + imgTitle + '\'' +
                ", limit='" + limit + '\'' +
                ", thumbnail='" + thumbnail + '\'' +
                ", trailer='" + trailer + '\'' +
                ", video='" + video + '\'' +
                ", year='" + year + '\'' +
                ", duration='" + duration + '\'' +
                '}';
    }
}
