package com.alticast.allso.let.openapi.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface OpenapiService {

	public List<Map<String, Object>> selectSites(Map<String, Object> paramMap) throws Exception;
	
	public int selectSitesTotCnt(Map<String, Object> paramMap) throws Exception;
	
	public Map<String, Object> selectSite(Map<String, Object> paramMap) throws Exception;
	
	public int insertSite(Map<String, Object> paramMap) throws Exception;
	
	public int updateSite(Map<String, Object> paramMap) throws Exception;

	public int deleteSite(Map<String, Object> paramMap) throws Exception;

}
