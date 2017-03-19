package com.alticast.allso.let.hive.web;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.alticast.allso.cmmn.util.CmmnUtil;

@Controller
@RequestMapping("/hive")
public class HiveController {
	
	

	@RequestMapping(method = RequestMethod.GET)
	public String homeGet(HttpServletRequest req, HttpServletResponse resp, @RequestParam HashMap<String, Object> paramMap) throws Exception {
		return CmmnUtil.sendJSP("/hive/hive");
	}
	
}