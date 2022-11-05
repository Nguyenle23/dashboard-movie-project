package com.server.netflix.services;

import com.server.netflix.models.Movie;
import com.server.netflix.repositories.MovieRepository;
import com.server.netflix.repositories.MovieServiceRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@Transactional
public class MovieServiceImpl implements MovieServiceRepository {
    private final MovieRepository movieRepository;

    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    @Override
    public Optional<Movie> getMovieById(String id) {
        Optional<Movie> movie = movieRepository.findById(id);
        if (movie.isPresent()) {
            return movieRepository.findById(id);
        } else {
            throw new IllegalStateException("Movie with id " + id + "is not exist");
        }
    }

    public Movie addMovie(Movie movie){
        return movieRepository.save(movie);
    }

    public void updateMovie(Movie movie) {
        Optional<Movie> findMovie = this.movieRepository.findById(movie.get_id());
        if (findMovie.isPresent()) {
            Movie movieData = findMovie.get();
            movieData.setTitle(movie.getTitle());
            movieData.setDuration(movie.getDuration());
            movieData.setDescription(movie.getDescription());
            movieData.setImg(movie.getImg());
            movieData.setImgTitle(movie.getImgTitle());
            movieData.setThumbnail(movie.getThumbnail());
            movieData.setYear(movie.getYear());
            movieData.setVideo(movie.getVideo());
            movieData.setTrailer(movie.getTrailer());
            movieData.setGenre(movie.getGenre());
            movieData.setLimit(movie.getLimit());
            movieData.setSeries(movie.isSeries());
            movieData.setDestroy(movie.isDestroy());
            movieRepository.save(movieData);
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
