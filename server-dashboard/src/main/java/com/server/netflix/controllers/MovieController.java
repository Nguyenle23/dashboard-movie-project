package com.server.netflix.controllers;

import com.server.netflix.models.Movie;
import com.server.netflix.services.MovieService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class MovieController {
    private final MovieService movieService;

    @GetMapping("/movies")
    public List<Movie> getAllMovie() {
        return movieService.getAllMovies();
    }

    @PostMapping("/movie")
    public Movie createMovie() {
        return movieService.createMovie();
    }

    @PutMapping("movie/update/{title}")
    public void updateMovie(
            @PathVariable("title") String title,
            @RequestParam(required = false) String genre,
            @RequestParam(required = false) String limit
    ) {
        movieService.updateMovie(title, genre, limit);
    }

    @DeleteMapping("movie/{title}")
    public void removeMovie(@PathVariable("title") String title) {
        movieService.deleteMovie(title);
    }

}
