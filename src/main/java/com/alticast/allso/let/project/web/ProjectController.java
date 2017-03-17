package com.alticast.allso.let.project.web;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.alticast.allso.cmmn.util.CmmnUtil;

@Controller
@RequestMapping("/project")
public class ProjectController {
	
	private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(ProjectController.class);
	
	@RequestMapping(method = RequestMethod.GET)
	public String projectGet(HttpServletRequest req, HttpServletResponse resp, @RequestParam HashMap<String, Object> paramMap) throws Exception {
		return CmmnUtil.sendJSP("/project/project");
	}

}
