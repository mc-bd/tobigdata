package com.alticast.allso.let.cms.board.service;

import java.util.List;
import java.util.Map;

public interface BoardService {

	public List<Map<String, Object>> selectSites(Map<String, Object> paramMap) throws Exception;
	
	public int selectSitesTotCnt(Map<String, Object> paramMap) throws Exception;
	
	public Map<String, Object> selectSite(Map<String, Object> paramMap) throws Exception;
	
	public int insertSite(Map<String, Object> paramMap) throws Exception;
	
	public int updateSite(Map<String, Object> paramMap) throws Exception;

	public int deleteSite(Map<String, Object> paramMap) throws Exception;

}
