package com.alticast.allso.let.api.web;

import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alticast.allso.cmmn.Ajax;
import com.alticast.allso.cmmn.util.CmmnUtil;
import com.alticast.allso.let.api.service.ApiService;

@Controller
@RequestMapping("/api")
public class ApiController {
	
	private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(ApiController.class);
	
	@Resource(name = "apiService")
	private ApiService apiService;
	
	@RequestMapping(value="mission" ,method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
	public @ResponseBody String apiPost(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> user = apiService.apiUser(paramMap);
		Ajax ajax = new Ajax();
		if (user != null) {
			ajax.setData(user);
			ajax.setStatus(HttpStatus.OK);
		}
		return ajax.toJSON();
	}	

}
