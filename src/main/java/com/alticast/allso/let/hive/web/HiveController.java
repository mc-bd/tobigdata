package com.alticast.allso.let.hive.web;

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
import com.alticast.allso.let.hive.service.HiveService;

@Controller
@RequestMapping("/hive")
public class HiveController {
	
	private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(HiveController.class);
	
	@Resource(name = "hiveService")
	private HiveService hiveService;

	@RequestMapping(value="selectAvgExpense" ,method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	public @ResponseBody String selectAvgExpense(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> predict = hiveService.selectAvgExpense(paramMap);
		Ajax ajax = new Ajax();
		if (predict != null) {
			ajax.setData(predict);
			ajax.setStatus(HttpStatus.OK);
		}
		return ajax.toJSON();
	}
	
	@RequestMapping(value="selectAvgSave" ,method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	public @ResponseBody String selectAvgSave(HttpServletRequest req
			, HttpServletResponse resp
			, @RequestBody String requestBody
			) throws Exception {
		Map<String, Object> paramMap = CmmnUtil.jsonToMap(requestBody);
		Map<String, Object> predict = hiveService.selectAvgSave(paramMap);
		Ajax ajax = new Ajax();
		if (predict != null) {
			ajax.setData(predict);
			ajax.setStatus(HttpStatus.OK);
		}
		return ajax.toJSON();
	}
	
}
