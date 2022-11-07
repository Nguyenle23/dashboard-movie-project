package com.server.netflix.services;

import com.server.netflix.config.ResourceNotFoundException;
import com.server.netflix.models.Movie;
import com.server.netflix.repositories.MovieRepository;
import com.server.netflix.repositories.MovieServiceRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.mongodb.core.MongoTemplate;


import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@AllArgsConstructor
@Transactional
public class MovieServiceImpl implements MovieServiceRepository {

    @Autowired
    MongoTemplate mongoTemplate;

    private final MovieRepository movieRepository;

    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    @Override
    public ResponseEntity<Movie> getMovieById(String id) throws ResourceNotFoundException {
        Movie movie = movieRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Movie not found with id " + id));
        return ResponseEntity.ok().body(movie);
//        if (movie.isPresent()) {
//            return movieRepository.findById(id);
//        } else {
//            throw new IllegalStateException("Movie with id " + id + "is not exist");
//        }
    }


//    {
//        ResponseEntity<Movie> movie = movieRepository.findById(id);
//        if (movie.isPresent()) {
//            return movieRepository.findById(id);
//        } else {
//            throw new IllegalStateException("Movie with id " + id + "is not exist");
//        }
//    }

    public Movie addMovie(Movie movie){
        return movieRepository.save(movie);
    }

    public void updateMovie(Movie movie) {
        Optional<Movie> findMovie = this.movieRepository.findById(movie.get_id());
        Movie updateMovie = findMovie.get();
        if (findMovie.isPresent()) {
            if (movie.getTitle() != null) {
                updateMovie.setTitle(movie.getTitle());
                movieRepository.save(updateMovie);
            }
            if (movie.getDuration() != null) {
                updateMovie.setDuration(movie.getDuration());
                movieRepository.save(updateMovie);
            }
            if (movie.getGenre() != null) {
                updateMovie.setGenre(movie.getGenre());
                movieRepository.save(updateMovie);
            }
            if (movie.getYear() != null) {
                updateMovie.setYear(movie.getYear());
                movieRepository.save(updateMovie);
            }
            if (movie.getLimit() != null) {
                updateMovie.setLimit(movie.getLimit());
                movieRepository.save(updateMovie);
            }
            if (movie.isSeries() != false) {
                updateMovie.setSeries(!movie.isSeries());
                movieRepository.save(updateMovie);
            } else {
                updateMovie.setSeries(movie.isSeries());
                movieRepository.save(updateMovie);
            }
            movieRepository.save(updateMovie);
        } else {
            throw new IllegalStateException("Movie with id" + movie.get_id() + "is not exist");
        }
    }

    public void deleteMovie(String id) {
        Optional<Movie> movie = movieRepository.findById(id);
        if (movie.isPresent()) {
            movieRepository.deleteById(id);
        } else {
            throw new IllegalStateException("Cannot delete movie with id " + id);
        }
    }
}
