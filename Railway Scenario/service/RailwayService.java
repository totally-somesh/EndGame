package com.app.service;

import java.util.List;

import com.app.entities.Category;
import com.app.entities.Railway;

public interface RailwayService {
	
	String addRailway(Railway r);
	
	List<Railway> getDetails();
	
	String deleteRailway(Integer id);
	
	List<Railway> getByCategory(Category c);
}
