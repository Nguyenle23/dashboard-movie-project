package com.server.netflix.repositories;

import com.server.netflix.models.Movie;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface MovieRepository extends MongoRepository<Movie, ObjectId> {
    Optional<Movie> findMovieByTitle(String title);

    Movie findOneMovieByTitle(String title);

    void deleteMovieByTitle(String title);

}
