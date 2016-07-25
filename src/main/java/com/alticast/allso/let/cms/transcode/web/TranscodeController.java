package com.alticast.allso.let.cms.transcode.web;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alticast.allso.cmmn.Ajax;
import com.alticast.allso.cmmn.PaginationInf;
import com.alticast.allso.cmmn.service.CmmnService;
import com.alticast.allso.cmmn.util.CmmnUtil;
import com.alticast.allso.let.cms.transcode.service.TranscodeService;

import egovframework.example.sample.service.SampleDefaultVO;

@Controller
@RequestMapping("/transcode")
public class TranscodeController {
	
	private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(TranscodeController.class);
	
	@Resource(name = "cmmnService")
	private CmmnService cmmnService;
	
	@Resource(name = "transcodeService")
	private TranscodeService transcodeService;
	
	@RequestMapping(method = RequestMethod.GET, produces = "text/html;charset=UTF-8")
	public String transcodeGet(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestParam HashMap<String, Object> paramMap
//			, @ModelAttribute Model model
			, Model model
			) throws Exception {
		model.addAttribute("cmmnCodes", cmmnService.selectCmmnCodes("TRANS_STATE"));
		return CmmnUtil.sendJSP("/cms/transcode/transcodeList");
	}
	
	@RequestMapping(method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	public @ResponseBody String transcodePostList(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			, @ModelAttribute("searchVO") SampleDefaultVO searchVO
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> data = new LinkedHashMap<>();
		data.put("params", paramMap);
		
		/* ++ paginationInfo */
		PaginationInf paginationInf = CmmnUtil.getPagination(searchVO, paramMap);
		
		List<?> records = transcodeService.selectRecords(paramMap);
		data.put("records", records);
		
		int recordsTotCnt = transcodeService.selectRecordsTotCnt(paramMap);
		paginationInf.setTotalRecordCount(recordsTotCnt);
		paginationInf.setOthers();
		
		data.put("paginationInfo", paginationInf);
		/* -- paginationInfo */
		
		return new Ajax().setData(data).toJSON();
	}
	
	@RequestMapping(value = {"/view"}, method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	public @ResponseBody String transcodeGetDetailByPost(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> data = new LinkedHashMap<>();
		data.put("params", paramMap);
		data.put("record", transcodeService.selectRecord(paramMap));
		return new Ajax().setData(data).toJSON();
	}
	
	@RequestMapping(value = {"/create", "/view", "/edit"}, method = RequestMethod.GET, produces = "text/html;charset=UTF-8")
	public String transcodeEdit(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestParam HashMap<String, Object> paramMap
			, Model model
			) throws Exception {
		model.addAttribute("cmmnCodes", cmmnService.selectCmmnCodes("TRANS_STATE"));
		return CmmnUtil.sendJSP("/cms/transcode/transcodeEdit");
	}
	
	@RequestMapping(value = {"/{create}"}, method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	public @ResponseBody String transcodeCreatePost(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> data = new LinkedHashMap<>();
		data.put("params", paramMap);
		data.put("result", transcodeService.insertRecord(paramMap));
		return new Ajax().setData(data).toJSON();
	}
	
	@RequestMapping(method = RequestMethod.PUT, produces = "application/json;charset=UTF-8")
	public @ResponseBody String transcodePut(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> data = new LinkedHashMap<>();
		data.put("params", paramMap);
		data.put("result", transcodeService.updateRecord(paramMap));
		return new Ajax().setData(data).toJSON();
	}
	
	@RequestMapping(method = RequestMethod.DELETE, produces = "application/json;charset=UTF-8")
	public @ResponseBody String transcodeDelete(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> data = new LinkedHashMap<>();
		data.put("params", paramMap);
		data.put("result", transcodeService.deleteRecord(paramMap));
		return new Ajax().setData(data).toJSON();
	}

}
