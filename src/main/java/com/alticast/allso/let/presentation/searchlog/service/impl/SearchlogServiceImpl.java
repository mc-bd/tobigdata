package com.alticast.allso.let.presentation.searchlog.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.alticast.allso.let.presentation.searchlog.service.SearchlogService;

@Service("searchlogService")
public class SearchlogServiceImpl implements SearchlogService {
	
	@Resource(name = "searchlogMapper")
	private SearchlogMapper searchlogDao;

	@Override
	public List<Map<String, Object>> selectSearchlogs(
			Map<String, Object> paramMap) throws Exception {
		return searchlogDao.selectSearchlogs(paramMap);
	}

	@Override
	public int selectSearchlogsTotCnt(Map<String, Object> paramMap) throws Exception {
		return searchlogDao.selectSearchlogsTotCnt(paramMap);
	}

	@Override
	public Map<String, Object> selectSearchlog(Map<String, Object> paramMap)
			throws Exception {
		return searchlogDao.selectSearchlog(paramMap);
	}

	@Override
	public int insertSearchlog(Map<String, Object> paramMap) throws Exception {
		return searchlogDao.insertSearchlog(paramMap);
	}

	@Override
	public int updateSearchlog(Map<String, Object> paramMap) throws Exception {
		return searchlogDao.updateSearchlog(paramMap);
	}

	@Override
	public int deleteSearchlog(Map<String, Object> paramMap) throws Exception {
		return searchlogDao.deleteSearchlog(paramMap);
	}

}