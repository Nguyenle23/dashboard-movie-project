package com.server.netflix.repositories;

import com.server.netflix.config.ResourceNotFoundException;
import com.server.netflix.models.Movie;
import org.bson.types.ObjectId;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface MovieServiceRepository {
    Movie addMovie(Movie movie);

    List<Movie> getAllMovies();

    ResponseEntity<Movie> getMovieById(String id) throws ResourceNotFoundException;

    void updateMovie(Movie movie);

    void deleteMovie(String id);
}
