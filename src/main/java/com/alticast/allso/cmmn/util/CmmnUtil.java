package com.alticast.allso.cmmn.util;

import java.io.IOException;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


public class CmmnUtil {
	private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(CmmnUtil.class);
	
	public static String sendJSP(String jsp) {
		log.debug("sendJSP: {}", jsp);
		return jsp;
	}
	
	public static String sendRedirect(String url) {
		log.debug("sendRedirect: {}", url);
		return "redirect:" + url;
	}
	
//	public static <T> List<T> jsonToList() {
//	public static List<Map<String, Object>> jsonToList() {
	public static Map<String, Object> jsonToMap(String content) {
		try {
//			Map<String, Object> map = new LinkedHashMap<>();
			return new ObjectMapper().readValue(content, LinkedHashMap.class);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	public static String mapToJson(Object object) {
		try {
			return new ObjectMapper().writeValueAsString(object);
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

}
