package com.server.netflix.services;

import com.server.netflix.models.Movie;
import com.server.netflix.repositories.MovieRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@AllArgsConstructor
public class MovieService {
    private final MovieRepository movieRepository;

    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    public Movie createMovie(){
        return movieRepository.insert(new Movie(
                "test1",
                "test1 Image",
                true,
                false,
                "test1 description",
                "test1 genre",
                "test1 Imagetitle",
                "test1 limit",
                "test1 thumbnail",
                "test1 trailer",
                "test1 video",
                "2001",
                "1000s"
        ));
    }

    public void updateMovie(String title, String genre, String limit) {
        Movie movie = movieRepository.findOneMovieByTitle(title);
        if(genre != null && genre.length() > 0) {
            movie.setGenre(genre);
        }
        if(limit != null && limit.length() > 0) {
            movie.setLimit(limit);
        }
    }

    public void deleteMovie(String title) {
        movieRepository.findMovieByTitle(title)
                .ifPresentOrElse(s -> {
						System.out.println("delete movie");
                        movieRepository.deleteMovieByTitle(title);
					}, () -> {
						System.out.println("No movie with title");
					});
    }
}
