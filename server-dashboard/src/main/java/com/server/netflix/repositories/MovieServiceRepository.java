package com.server.netflix.repositories;

import com.server.netflix.models.Movie;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Optional;

public interface MovieServiceRepository {
    Movie addMovie(Movie movie);

    List<Movie> getAllMovies();

    Optional<Movie> getMovieById(String id);

    void updateMovie(Movie movie);

    void deleteMovie(String id);
}
