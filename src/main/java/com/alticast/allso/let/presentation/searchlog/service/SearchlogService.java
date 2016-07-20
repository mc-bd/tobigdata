package com.alticast.allso.let.presentation.searchlog.service;

import java.util.List;
import java.util.Map;

public interface SearchlogService {

	public List<Map<String, Object>> selectSearchlogs(Map<String, Object> paramMap) throws Exception;
	
	public int selectSearchlogsTotCnt(Map<String, Object> paramMap) throws Exception;
	
	public Map<String, Object> selectSearchlog(Map<String, Object> paramMap) throws Exception;
	
	public int insertSearchlog(Map<String, Object> paramMap) throws Exception;
	
	public int updateSearchlog(Map<String, Object> paramMap) throws Exception;

	public int deleteSearchlog(Map<String, Object> paramMap) throws Exception;

}
