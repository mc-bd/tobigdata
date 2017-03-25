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
	public @ResponseBody String apiMission(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> mission = apiService.apiMission(paramMap);
		Ajax ajax = new Ajax();
		if (mission != null) {
			ajax.setData(mission);
			ajax.setStatus(HttpStatus.OK);
		}
		return ajax.toJSON();
	}
	
	@RequestMapping(value="income" ,method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
	public @ResponseBody String apiIncome(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> income = apiService.apiIncome(paramMap);
		Ajax ajax = new Ajax();
		if (income != null) {
			ajax.setData(income);
			ajax.setStatus(HttpStatus.OK);
		}
		return ajax.toJSON();
	}
	
	@RequestMapping(value="expense" ,method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
	public @ResponseBody String apiExpense(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> expense = apiService.apiExpense(paramMap);
		Ajax ajax = new Ajax();
		if (expense != null) {
			ajax.setData(expense);
			ajax.setStatus(HttpStatus.OK);
		}
		return ajax.toJSON();
	}
	
	@RequestMapping(value="save" ,method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
	public @ResponseBody String apiSave(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> save = apiService.apiSave(paramMap);
		Ajax ajax = new Ajax();
		if (save != null) {
			ajax.setData(save);
			ajax.setStatus(HttpStatus.OK);
		}
		return ajax.toJSON();
	}

}
