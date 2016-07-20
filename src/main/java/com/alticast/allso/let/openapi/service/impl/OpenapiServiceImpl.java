package com.alticast.allso.let.openapi.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.alticast.allso.let.openapi.service.OpenapiService;

@Service("openapiService")
public class OpenapiServiceImpl implements OpenapiService {
	
	@Resource(name = "openapiMapper")
	private OpenapiMapper openapiDao;

	@Override
	public List<Map<String, Object>> selectSites(
			Map<String, Object> paramMap) throws Exception {
		return openapiDao.selectSites(paramMap);
	}

	@Override
	public int selectSitesTotCnt(Map<String, Object> paramMap) throws Exception {
		return openapiDao.selectSitesTotCnt(paramMap);
	}

	@Override
	public Map<String, Object> selectSite(Map<String, Object> paramMap)
			throws Exception {
		return openapiDao.selectSite(paramMap);
	}

	@Override
	public int insertSite(Map<String, Object> paramMap) throws Exception {
		return openapiDao.insertSite(paramMap);
	}

	@Override
	public int updateSite(Map<String, Object> paramMap) throws Exception {
		return openapiDao.updateSite(paramMap);
	}

	@Override
	public int deleteSite(Map<String, Object> paramMap) throws Exception {
		return openapiDao.deleteSite(paramMap);
	}

}