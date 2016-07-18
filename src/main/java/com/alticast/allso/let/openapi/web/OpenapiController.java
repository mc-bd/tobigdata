package com.alticast.allso.let.openapi.web;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alticast.allso.cmmn.Ajax;
import com.alticast.allso.cmmn.util.CmmnUtil;
import com.alticast.allso.let.openapi.service.OpenapiService;

@Controller
@RequestMapping("/openapi")
public class OpenapiController {
	
	private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(OpenapiController.class);
	
	@Resource(name = "openapiService")
	private OpenapiService openapiService;
	
	@RequestMapping(method = RequestMethod.GET, produces = "text/html;charset=UTF-8")
	public String openapiGet(HttpServletRequest req, HttpServletResponse resp, @RequestParam HashMap<String, Object> paramMap) throws Exception {
//		openapiService.insertSite(paramMap);
//		openapiService.updateSite(paramMap);
		return CmmnUtil.sendJSP("/openapi/openapiList");
	}
	
	@RequestMapping(method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
	public @ResponseBody String openapiGetList(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> data = new LinkedHashMap<>();
		data.put("params", paramMap);
		data.put("result", openapiService.selectSites(paramMap));
		return new Ajax().setData(data).toJSON();
	}
	
	@RequestMapping(value = {"/{id}"}, method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
	public @ResponseBody String openapiGetDetail(HttpServletRequest req
			, HttpServletResponse resp
			, @PathVariable String id
			) throws Exception {
		return new Ajax().toJSON();
	}
	
	@RequestMapping(value = {"/{id}"}, method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	public @ResponseBody String openapiGetDetailByPost(HttpServletRequest req
			, HttpServletResponse resp
			, @PathVariable String id
			) throws Exception {
		return new Ajax().toJSON();
	}
	
	@RequestMapping(method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	public @ResponseBody String openapiPost(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestParam HashMap<String, Object> paramMap
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> jsonMap = CmmnUtil.jsonToMap(requestBody);
		return new Ajax().setData(jsonMap).toJSON();
	}
	
	@RequestMapping(method = RequestMethod.PUT, produces = "application/json;charset=UTF-8")
	public @ResponseBody String openapiPut(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> jsonMap = CmmnUtil.jsonToMap(requestBody);
		return new Ajax().setData(jsonMap).toJSON();
	}
	
	@RequestMapping(method = RequestMethod.DELETE, produces = "application/json;charset=UTF-8")
	public @ResponseBody String openapiDelete(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> data = new LinkedHashMap<>();
		data.put("params", paramMap);
		data.put("result", openapiService.deleteSite(paramMap));
		return new Ajax().setData(data).toJSON();
	}

}
