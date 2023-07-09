package com.app.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.PositiveOrZero;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnoreType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Railway extends BaseEntity {
	@Column(length=30)
	private String name;
	
	@Enumerated(EnumType.STRING)
	@Column(length=30)
	private Category category;
	
	private LocalDateTime startTime;
	
	private LocalDateTime endTime;
	
	@Column(length=30)
	private String Source;
	
	@Column(length=30)
	private String Destination;
	
	@PositiveOrZero
	private double distance;
	
	@PositiveOrZero
	private double frequency;
}
