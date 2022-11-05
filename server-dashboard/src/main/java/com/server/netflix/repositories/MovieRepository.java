package com.server.netflix.repositories;

import com.server.netflix.models.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MovieRepository extends MongoRepository<Movie, String> {


}
