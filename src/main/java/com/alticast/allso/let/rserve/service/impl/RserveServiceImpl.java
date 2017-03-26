package com.alticast.allso.let.rserve.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.rosuda.REngine.REXP;
import org.rosuda.REngine.Rserve.RConnection;
import org.springframework.stereotype.Service;

import com.alticast.allso.let.rserve.service.RserveService;

@Service("rserveService")
public class RserveServiceImpl implements RserveService {
	
	private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(RserveServiceImpl.class);
	
	private RConnection rconn;
	private REXP x1;

	@Override
	public Map<String, Object> predict1(Map<String, Object> paramMap) throws Exception {
		
		log.info("R ping"); // TODO delete
		
		// to return map
		Map<String, Object> returnMap = new HashMap();
		
		// conn open
		rconn = new RConnection();
		
		// R config
		String pathOfRFile = "C:/Users/student/git/tobigdata/src/main/resources/r/new1.R"; // R file path config
		rconn.eval("source('" + pathOfRFile + "', encoding = 'UTF-8', echo=TRUE)");
		
		// params
		int totalincome = (int) paramMap.get("totalincome");
		int food = (int) paramMap.get("food");
		int transportation = (int) paramMap.get("transportation");
		int education = (int) paramMap.get("education");	
		
		// R execute
		x1 = rconn.eval("pre1(" + totalincome + "," + food + "," + transportation + "," + education + ")");
		
		// save result
		returnMap.put("data", x1.asDouble());
		
		// conn close
		rconn.close();
		
		log.info("R pong"); // TODO delete
		
		return returnMap;
		
	}
	
}
