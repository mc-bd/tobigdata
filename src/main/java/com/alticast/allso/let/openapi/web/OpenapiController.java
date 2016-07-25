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
import com.alticast.allso.cmmn.PaginationInf;
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
//		List<?> records = openapiService.selectRecords(paramMap);
//		data.put("result", records);
//
//		paginationInfo.setTotalRecordCount(records.size());
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
		
		/* ++ paginationInfo */
		PaginationInf paginationInf = CmmnUtil.getPagination(searchVO, paramMap);
		
		List<?> records = openapiService.selectRecords(paramMap);
		data.put("records", records);
		
		int recordsTotCnt = openapiService.selectRecordsTotCnt(paramMap);
		paginationInf.setTotalRecordCount(recordsTotCnt);
		paginationInf.setOthers();
		
		data.put("paginationInfo", paginationInf);
		/* -- paginationInfo */
		
		return new Ajax().setData(data).toJSON();
	}
	
	@RequestMapping(value = {"/cnt"}, method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	public @ResponseBody String openapiPostListCnt(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			, @ModelAttribute("searchVO") SampleDefaultVO searchVO
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> data = new LinkedHashMap<>();
		data.put("params", paramMap);
		
		data.put("recordsTotCnt", openapiService.selectRecordsTotCnt(paramMap));
		
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
		data.put("record", openapiService.selectRecord(paramMap));
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
		data.put("result", openapiService.insertRecord(paramMap));
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
		data.put("result", openapiService.updateRecord(paramMap));
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
		data.put("result", openapiService.deleteRecord(paramMap));
		return new Ajax().setData(data).toJSON();
	}

}
