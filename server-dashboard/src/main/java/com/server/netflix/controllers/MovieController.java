package com.server.netflix.controllers;

import com.server.netflix.models.Movie;
import com.server.netflix.services.MovieServiceImpl;
import lombok.AllArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@CrossOrigin
public class MovieController {
    private final MovieServiceImpl movieServiceImpl;

    @GetMapping("/movies")
    public List<Movie> getAllMovie() {
        return movieServiceImpl.getAllMovies();
    }

    @GetMapping("/movie/{id}")
    public Optional<Movie> getMovie(
            @PathVariable("id") ObjectId id
    ) {
        return movieServiceImpl.getMovieById(id);
    }

    @PostMapping("/movie")
    public Movie createMovie(
            @RequestBody Movie movie
    ) {
        return movieServiceImpl.addMovie(movie);
    }

    @PutMapping("/movie/update/{id}")
    public void updateMovie(
            @PathVariable("id") ObjectId _id,
            @RequestBody Movie movie
    ) {
        movie.set_id(_id);
        movieServiceImpl.updateMovie(movie);
    }

    @DeleteMapping("/movie/{id}")
    public void removeMovie(@PathVariable("id") ObjectId id) {
        movieServiceImpl.deleteMovie(id);
    }
}
