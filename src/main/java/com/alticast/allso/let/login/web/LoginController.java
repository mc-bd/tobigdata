package com.alticast.allso.let.login.web;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alticast.allso.cmmn.Ajax;
import com.alticast.allso.cmmn.util.CmmnUtil;
import com.alticast.allso.let.login.service.LoginService;

@Controller
@RequestMapping("/login")
public class LoginController {
	
	private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(LoginController.class);
	
	@Resource(name = "loginService")
	private LoginService loginService;
	
	@RequestMapping(method = RequestMethod.GET)
	public String loginGet(HttpServletRequest req, HttpServletResponse resp, @RequestParam HashMap<String, Object> paramMap) throws Exception {
		paramMap.put("id", "test");
		paramMap.put("password", "1234");
		Map<String, Object> user = loginService.loginUser(paramMap);
		return CmmnUtil.sendJSP("/login/loginForm");
	}
	
	@RequestMapping(method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
//	public String loginPost(HttpServletRequest req, HttpServletResponse resp, @RequestParam HashMap<String, Object> paramMap) throws Exception {
	public @ResponseBody String loginPost(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> user = loginService.loginUser(paramMap);
		Ajax ajax = new Ajax().setStatus(HttpStatus.UNAUTHORIZED);
		if (user != null) {
			req.getSession().setAttribute("login", user);
			ajax.setStatus(HttpStatus.OK);
		}
		return ajax.toJSON();
	}
	
	// TODO URL 정리 필요; login/logout; 이상함;
	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String logout(HttpServletRequest req, HttpServletResponse resp, @RequestParam HashMap<String, Object> paramMap) throws Exception {
		try {
			req.getSession().invalidate();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return CmmnUtil.sendRedirect("/home");
	}

}
