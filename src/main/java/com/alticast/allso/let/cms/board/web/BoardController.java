package com.alticast.allso.let.cms.board.web;

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
import com.alticast.allso.let.cms.board.service.BoardService;

import egovframework.example.sample.service.SampleDefaultVO;

@Controller
@RequestMapping("/board")
public class BoardController {
	
	private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(BoardController.class);
	
	@Resource(name = "boardService")
	private BoardService boardService;
	
	@RequestMapping(method = RequestMethod.GET, produces = "text/html;charset=UTF-8")
	public String boardGet(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestParam HashMap<String, Object> paramMap
			) throws Exception {
		return CmmnUtil.sendJSP("/cms/board/boardList");
	}
	
	@RequestMapping(method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	public @ResponseBody String boardPostList(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			, @ModelAttribute("searchVO") SampleDefaultVO searchVO
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> data = new LinkedHashMap<>();
		data.put("params", paramMap);
		
		/* ++ paginationInfo */
		PaginationInf paginationInf = CmmnUtil.getPagination(searchVO, paramMap);
		
		List<?> records = boardService.selectRecords(paramMap);
		data.put("records", records);
		
		int recordsTotCnt = boardService.selectRecordsTotCnt(paramMap);
		paginationInf.setTotalRecordCount(recordsTotCnt);
		paginationInf.setOthers();
		
		data.put("paginationInfo", paginationInf);
		/* -- paginationInfo */
		
		return new Ajax().setData(data).toJSON();
	}
	
	@RequestMapping(value = {"/view"}, method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	public @ResponseBody String boardGetDetailByPost(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> data = new LinkedHashMap<>();
		data.put("params", paramMap);
		data.put("record", boardService.selectRecord(paramMap));
		return new Ajax().setData(data).toJSON();
	}
	
	@RequestMapping(value = {"/create", "/view", "/edit"}, method = RequestMethod.GET, produces = "text/html;charset=UTF-8")
	public String boardEdit(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestParam HashMap<String, Object> paramMap
			) throws Exception {
		return CmmnUtil.sendJSP("/cms/board/boardEdit");
	}
	
	@RequestMapping(value = {"/{create}"}, method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	public @ResponseBody String boardCreatePost(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> data = new LinkedHashMap<>();
		data.put("params", paramMap);
		data.put("result", boardService.insertRecord(paramMap));
		return new Ajax().setData(data).toJSON();
	}
	
	@RequestMapping(method = RequestMethod.PUT, produces = "application/json;charset=UTF-8")
	public @ResponseBody String boardPut(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> data = new LinkedHashMap<>();
		data.put("params", paramMap);
		data.put("result", boardService.updateRecord(paramMap));
		return new Ajax().setData(data).toJSON();
	}
	
	@RequestMapping(method = RequestMethod.DELETE, produces = "application/json;charset=UTF-8")
	public @ResponseBody String boardDelete(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> data = new LinkedHashMap<>();
		data.put("params", paramMap);
		data.put("result", boardService.deleteRecord(paramMap));
		return new Ajax().setData(data).toJSON();
	}

}
