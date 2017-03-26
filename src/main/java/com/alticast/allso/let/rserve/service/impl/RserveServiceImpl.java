package com.alticast.allso.let.rserve.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.rosuda.REngine.REXP;
import org.rosuda.REngine.Rserve.RConnection;
import org.springframework.stereotype.Service;

import com.alticast.allso.let.rserve.service.RserveService;

@Service("rserveService")
public class RserveServiceImpl implements RserveService {
	
	private RConnection rconn;
	private REXP x1;

	@Override
	public Map<String, Object> predict1(Map<String, Object> paramMap) throws Exception {
		
		Map<String, Object> returnMap = new HashMap();
		
		System.out.println("ok"); // TODO delete
		rconn = new RConnection();
		
		String pathOfRFile = "C:/r_project/new1.R"; 
		rconn.eval("source('" + pathOfRFile + "', encoding = 'UTF-8', echo=TRUE)");
		
		int totalincome = (int) paramMap.get("totalincome");
		int food = (int) paramMap.get("food");
		int transportation = (int) paramMap.get("transportation");
		int education = (int) paramMap.get("education");	
		
		x1 = rconn.eval("pre1(" + totalincome + "," + food + "," + transportation + "," + education + ")");
		
		rconn.close();
		
		returnMap.put("data", x1.asDouble());
		
		return returnMap;
		
	}
	
}
