package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entities.Category;
import com.app.entities.Railway;
import com.app.repository.RailwayRepository;

@Service
@Transactional
public class RailwayServiceImpl implements RailwayService {
	
	@Autowired
	private RailwayRepository repo;
	
	@Override
	public String addRailway(Railway r) {
		String msg="Can't Add Railway";
		if(r.getStartTime().isBefore(r.getEndTime())) {
			repo.save(r);
			msg="Railway Added";
		}
		return msg;
	}

	@Override
	public List<Railway> getDetails() {
		return repo.findAll();
	}

	@Override
	public String deleteRailway(Integer id) {
		String msg="Can't Delete";
		if(repo.existsById(id)) {
			repo.deleteById(id);
			msg="Deleted Successfully";
		}
		return msg;
	}

	@Override
	public List<Railway> getByCategory(Category c) {
		
		return repo.findByCategory(c);
	}
	
	
	
	

}
