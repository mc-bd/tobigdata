package com.alticast.allso.let.openapi.web;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alticast.allso.cmmn.util.CmmnUtil;
import com.alticast.allso.let.openapi.service.OpenapiService;

@Controller
@RequestMapping("/openapi")
public class OpenapiController {
	
	private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(OpenapiController.class);
	
	@Resource(name = "openapiService")
	private OpenapiService openapiService;
	
	@RequestMapping(method = RequestMethod.GET)
	public String openapiGet(HttpServletRequest req, HttpServletResponse resp, @RequestParam HashMap<String, Object> paramMap) throws Exception {
		return CmmnUtil.sendJSP("/openapi/openapiList");
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody String openapiPost(HttpServletRequest req
//	public @ResponseBody Map<String, Object> openapiPost(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestParam HashMap<String, Object> paramMap
//			, @RequestBody(required = false) HashMap<String, Object> jsonMap
//			, @RequestBody(required = false) HashMap<Object, Object> jsonMap
//			, @RequestBody HashMap<String, Object> jsonMap
//			, @RequestBody MultiValueMap<String, String> jsonMap
			, @RequestBody String requestBody
			) throws Exception {
		log.debug("paramMap: {}", paramMap);
//		log.debug("jsonMap: {}", jsonMap);
		Map<String, Object> jsonMap = CmmnUtil.jsonToMap(requestBody);
		log.debug("jsonMap: {}", jsonMap);
		log.debug("requestBody: {}", requestBody);
		jsonMap.put("status", 200);
		return CmmnUtil.mapToJson(jsonMap);
	}

}
