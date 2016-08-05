package com.alticast.allso.let.presentation.searchlog.web;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alticast.allso.cmmn.Ajax;
import com.alticast.allso.cmmn.PaginationInf;
import com.alticast.allso.cmmn.util.CmmnUtil;
import com.alticast.allso.let.presentation.searchlog.service.SearchlogService;

import egovframework.example.sample.service.SampleDefaultVO;

@Controller
@RequestMapping("/searchlog")
public class SearchlogController {
	
	private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(SearchlogController.class);
	
	@Resource(name = "searchlogService")
	private SearchlogService searchlogService;
	
	@RequestMapping(method = RequestMethod.GET, produces = "text/html;charset=UTF-8")
	public String searchlogGet(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestParam HashMap<String, Object> paramMap
			) throws Exception {
		return CmmnUtil.sendJSP("/presentation/searchlog/searchlogList");
	}
	
	@RequestMapping(method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	public @ResponseBody String searchlogPostList(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			, @ModelAttribute("searchVO") SampleDefaultVO searchVO
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> data = new LinkedHashMap<>();
		data.put("params", paramMap);
		
		/* ++ paginationInfo */
		PaginationInf paginationInf = CmmnUtil.getPagination(searchVO, paramMap);
		
		List<?> records = searchlogService.selectSearchlogs(paramMap);
		data.put("records", records);
		
		int recordsTotCnt = searchlogService.selectSearchlogsTotCnt(paramMap);
		paginationInf.setTotalRecordCount(recordsTotCnt);
		paginationInf.setOthers();
		
		data.put("paginationInfo", paginationInf);
		/* -- paginationInfo */
		
		return new Ajax().setData(data).toJSON();
	}
	
	@RequestMapping(value = {"/view"}, method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	public @ResponseBody String searchlogGetDetailByPost(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> data = new LinkedHashMap<>();
		data.put("params", paramMap);
		data.put("searchlog", searchlogService.selectSearchlog(paramMap));
		return new Ajax().setData(data).toJSON();
	}
	
	@RequestMapping(value = {"/create", "/view", "/edit"}, method = RequestMethod.GET, produces = "text/html;charset=UTF-8")
	public String searchlogEdit(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestParam HashMap<String, Object> paramMap
			) throws Exception {
		return CmmnUtil.sendJSP("/presentation/searchlog/searchlogEdit");
	}
	
	@RequestMapping(value = {"/{create}"}, method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	public @ResponseBody String searchlogCreatePost(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> data = new LinkedHashMap<>();
		data.put("params", paramMap);
		data.put("result", searchlogService.insertSearchlog(paramMap));
		return new Ajax().setData(data).toJSON();
	}
	
	@RequestMapping(method = RequestMethod.PUT, produces = "application/json;charset=UTF-8")
	public @ResponseBody String searchlogPut(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> data = new LinkedHashMap<>();
		data.put("params", paramMap);
		data.put("result", searchlogService.updateSearchlog(paramMap));
		return new Ajax().setData(data).toJSON();
	}
	
	@RequestMapping(method = RequestMethod.DELETE, produces = "application/json;charset=UTF-8")
	public @ResponseBody String searchlogDelete(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> data = new LinkedHashMap<>();
		data.put("params", paramMap);
		data.put("result", searchlogService.deleteSearchlog(paramMap));
		return new Ajax().setData(data).toJSON();
	}

}
