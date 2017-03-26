package com.alticast.allso.let.rserve.web;

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
import com.alticast.allso.let.rserve.service.RserveService;

@Controller
@RequestMapping("/rserve")
public class RserveController {
	
	private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(RserveController.class);
	
	@Resource(name = "rserveService")
	private RserveService rserveService;

	@RequestMapping(value="predict1" ,method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	public @ResponseBody String apiMission(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> mission = rserveService.predict1(paramMap);
		Ajax ajax = new Ajax();
		if (mission != null) {
			ajax.setData(mission);
			ajax.setStatus(HttpStatus.OK);
		}
		return ajax.toJSON();
	}
	
}
