package com.alticast.allso.let.openapi.web;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alticast.allso.cmmn.Ajax;
import com.alticast.allso.cmmn.util.CmmnUtil;
import com.alticast.allso.let.openapi.service.OpenapiService;

import egovframework.example.sample.service.SampleDefaultVO;
import egovframework.rte.ptl.mvc.tags.ui.pagination.PaginationInfo;

@Controller
@RequestMapping("/openapi")
public class OpenapiController {
	
	private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(OpenapiController.class);
	
	@Resource(name = "openapiService")
	private OpenapiService openapiService;
	
	@RequestMapping(method = RequestMethod.GET, produces = "text/html;charset=UTF-8")
	public String openapiGet(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestParam HashMap<String, Object> paramMap
			) throws Exception {
		return CmmnUtil.sendJSP("/openapi/openapiList");
	}
	
	
//	@RequestMapping(method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
//	public @ResponseBody String openapiPostList(HttpServletRequest req
//			, HttpServletResponse resp
//			, @RequestBody String requestBody
//			, @ModelAttribute("searchVO") SampleDefaultVO searchVO
//			) throws Exception {
//		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
//		Map<String, Object> data = new LinkedHashMap<>();
//		data.put("params", paramMap);
//		
//		/* paginationInfo */
//		PaginationInfo paginationInfo = new PaginationInfo();
//		searchVO.setPageIndex((int) paramMap.get("pageIndex"));
//		paginationInfo.setCurrentPageNo(searchVO.getPageIndex());
//		paginationInfo.setRecordCountPerPage(searchVO.getPageUnit());
//		paginationInfo.setPageSize(searchVO.getPageSize());
//
//		searchVO.setFirstIndex(paginationInfo.getFirstRecordIndex());
//		searchVO.setLastIndex(paginationInfo.getLastRecordIndex());
//		searchVO.setRecordCountPerPage(paginationInfo.getRecordCountPerPage());
//		
//		paramMap.put("searchVO", searchVO);
//		log.debug("searchVO: {}", searchVO);
//		log.debug("paramMap: {}", paramMap);
//		List<?> sites = openapiService.selectSites(paramMap);
//		data.put("result", sites);
//
//		paginationInfo.setTotalRecordCount(sites.size());
//		data.put("paginationInfo", paginationInfo);
//		/* // paginationInfo */
//		
//		return new Ajax().setData(data).toJSON();
//	}
	
//	@RequestMapping(method = RequestMethod.POST)
//	@RequestMapping(method = RequestMethod.POST, produces = "text/html;charset=UTF-8")
	@RequestMapping(method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	public @ResponseBody String openapiPostList(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			, @ModelAttribute("searchVO") SampleDefaultVO searchVO
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> data = new LinkedHashMap<>();
		data.put("params", paramMap);
		
		/* paginationInfo */
		PaginationInfo paginationInfo = new PaginationInfo();
		searchVO.setPageIndex((int) paramMap.get("pageIndex"));
		paginationInfo.setCurrentPageNo(searchVO.getPageIndex());
		paginationInfo.setRecordCountPerPage(searchVO.getPageUnit());
		paginationInfo.setPageSize(searchVO.getPageSize());

		searchVO.setFirstIndex(paginationInfo.getFirstRecordIndex());
		searchVO.setLastIndex(paginationInfo.getLastRecordIndex());
		searchVO.setRecordCountPerPage(paginationInfo.getRecordCountPerPage());
		
		paramMap.put("searchVO", searchVO);
		log.debug("searchVO: {}", searchVO);
		log.debug("paramMap: {}", paramMap);
		List<?> sites = openapiService.selectSites(paramMap);
		data.put("sites", sites);

		paginationInfo.setTotalRecordCount(sites.size());
		data.put("paginationInfo", paginationInfo);
		/* // paginationInfo */
		
		return new Ajax().setData(data).toJSON();
	}
	
	@RequestMapping(value = {"/view"}, method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	public @ResponseBody String openapiGetDetailByPost(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> data = new LinkedHashMap<>();
		data.put("params", paramMap);
		data.put("site", openapiService.selectSite(paramMap));
		return new Ajax().setData(data).toJSON();
	}
	
	@RequestMapping(value = {"/create", "/view", "/edit"}, method = RequestMethod.GET, produces = "text/html;charset=UTF-8")
	public String openapiEdit(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestParam HashMap<String, Object> paramMap
			) throws Exception {
		return CmmnUtil.sendJSP("/openapi/openapiEdit");
	}
	
	@RequestMapping(value = {"/{create}"}, method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	public @ResponseBody String openapiCreatePost(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> data = new LinkedHashMap<>();
		data.put("params", paramMap);
		data.put("result", openapiService.insertSite(paramMap));
		return new Ajax().setData(data).toJSON();
	}
	
	@RequestMapping(method = RequestMethod.PUT, produces = "application/json;charset=UTF-8")
	public @ResponseBody String openapiPut(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> data = new LinkedHashMap<>();
		data.put("params", paramMap);
		data.put("result", openapiService.updateSite(paramMap));
		return new Ajax().setData(data).toJSON();
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
