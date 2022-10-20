package com.server.netflix;

import com.server.netflix.models.Movie;
import com.server.netflix.repositories.MovieRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import java.util.List;

@SpringBootApplication
public class NetflixApplication {

	public static void main(String[] args) {
		SpringApplication.run(NetflixApplication.class, args);
	}

//	@Bean
//	CommandLineRunner runner(MovieRepository movieRepository, MongoTemplate mongoTemplate) {
//		return  args -> {
//			String title = "tets";
//			Movie movie = new Movie(
//					"tets",
//					"adfsadfa",
//					true,
//					false,
//					"fdfsdfa",
//					"fdfd",
//					"fdfdfd",
//					"fdfdfdf","fdfdfd",
//					"fdfdfdd", "dfdfdffd","2001","1000s"
//			);
//			//usingMongoTemplateAndQuery(movieRepository, mongoTemplate, title, movie);
//
//			movieRepository.findMovieByTitle(title)
//					.ifPresentOrElse(s -> {
//						System.out.println("insert already " + s);
//					}, () -> {
//						System.out.println("insert");
//						movieRepository.insert(movie);
//					});
//		};
//	}

//	private void usingMongoTemplateAndQuery(MovieRepository movieRepository, MongoTemplate mongoTemplate, String title,Movie movie) {
//		Query query = new Query();
//		query.addCriteria(Criteria.where("title").is(title));
//
//		List<Movie> movies = mongoTemplate.find(query, Movie.class);
//
//		if (movies.size() > 1) {
//			throw new IllegalStateException("found many movies");
//		}
//
//		if (movies.isEmpty()) {
//			System.out.println("insert");
//			movieRepository.insert(movie);
//		} else {
//			System.out.println("insert already " + title);
//		}
//	}

}
