package com.alticast.allso.cmmn.util;

import java.io.IOException;
import java.util.LinkedHashMap;
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
			if (isBlank(content)) {
				return new LinkedHashMap<>();
			}
			return new ObjectMapper().readValue(content, LinkedHashMap.class);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	public static String convertJSON(Object object) {
		try {
			return new ObjectMapper().writeValueAsString(object);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public static boolean isBlank(String content) {
		if (content == null) {
			return true;
		}
		if ("".equals(content)) {
			return true;
		}
		return false;
	}
	
	public static Map<String, Object> getData(String requestBody) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> data = new LinkedHashMap<>();
		data.put("params", paramMap);
		return data;
	}

}
