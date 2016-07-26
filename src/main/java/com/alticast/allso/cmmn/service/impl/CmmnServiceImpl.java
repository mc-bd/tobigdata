package com.alticast.allso.cmmn.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.alticast.allso.cmmn.service.CmmnService;

import egovframework.rte.psl.dataaccess.util.CamelUtil;

@Service("cmmnService")
public class CmmnServiceImpl implements CmmnService {
	
	@Resource(name = "cmmnMapper")
	CmmnMapper cmmnMapper;

	@Override
	public List<Map<String, Object>> selectCmmnCode(
			Map<String, Object> paramMap) throws Exception {
		return cmmnMapper.selectCmmnCode(paramMap);
	}

	@Override
	public Map<String, List<Map<String, Object>>> selectCmmnCodes(
			String... cmmnCode1s) throws Exception {
		
		Map<String, List<Map<String, Object>>> cmmnCodes = new HashMap<>();
		Map<String, Object> paramMap = new HashMap<>();
		
		for (String cmmnCode1 : cmmnCode1s) {
			paramMap.put("cmmnCode1", cmmnCode1);
			cmmnCodes.put(CamelUtil.convert2CamelCase(cmmnCode1 + "_CODES"), selectCmmnCode(paramMap));
		}
		
		return cmmnCodes;
	}

}
