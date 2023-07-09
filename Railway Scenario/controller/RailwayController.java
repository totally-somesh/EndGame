package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Category;
import com.app.entities.Railway;
import com.app.service.RailwayService;

@RestController
@RequestMapping("/railways")
@Validated
public class RailwayController {

	@Autowired
	private RailwayService service;
	
	@GetMapping("/details")
	public List<Railway> details(){
		return service.getDetails();
	}
	
	@PostMapping("/insert")
	public String insert(@RequestBody Railway r) {
		return service.addRailway(r);
	}
	
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable Integer id) {
		return service.deleteRailway(id);
	}
	
	@GetMapping("/getByCategory/{category}")
	public List<Railway> getDetailsByCategory(@PathVariable Category category){
		return service.getByCategory(category);
	}
}
