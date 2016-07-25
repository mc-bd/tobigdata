package com.alticast.allso.cmmn.service;

import java.util.List;
import java.util.Map;

public interface CmmnService {
	
	public List<Map<String, Object>> selectCmmnCode(Map<String, Object> paramMap) throws Exception;
	
	public Map<String, List<Map<String, Object>>> selectCmmnCodes(String... cmmnCode1s) throws Exception;

}
