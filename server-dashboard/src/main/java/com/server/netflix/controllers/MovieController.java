package com.server.netflix.controllers;

import com.server.netflix.config.ResourceNotFoundException;
import com.server.netflix.models.Movie;
import com.server.netflix.services.MovieServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<Movie> getMovie(
            @PathVariable("id") String id
    ) throws ResourceNotFoundException {
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
            @PathVariable("id") String _id,
            @RequestBody Movie movie
    ) {
        movie.set_id(_id);
        movieServiceImpl.updateMovie(movie);
    }

    @DeleteMapping("/movie/{id}")
    public void removeMovie(@PathVariable("id") String id) {
        movieServiceImpl.deleteMovie(id);
    }
}
