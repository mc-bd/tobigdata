package com.alticast.allso.cmmn.util;

import java.util.HashMap;
import java.util.List;


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
	public static List<HashMap<String, Object>> jsonToList() {
		return null;
	}

}
