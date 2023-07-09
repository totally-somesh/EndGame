package com.app;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class RailwayApplication {

	public static void main(String[] args) {
		SpringApplication.run(RailwayApplication.class, args);
	}
	
	@Bean
	public ModelMapper myModelMapper() {
		ModelMapper map=new ModelMapper();
		map.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		return map;
	}
}
