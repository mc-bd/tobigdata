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
	public List<Map<String, Object>> selectRecords(
			Map<String, Object> paramMap) throws Exception {
		return openapiDao.selectRecords(paramMap);
	}

	@Override
	public int selectRecordsTotCnt(Map<String, Object> paramMap) throws Exception {
		return openapiDao.selectRecordsTotCnt(paramMap);
	}

	@Override
	public Map<String, Object> selectRecord(Map<String, Object> paramMap)
			throws Exception {
		return openapiDao.selectRecord(paramMap);
	}

	@Override
	public int insertRecord(Map<String, Object> paramMap) throws Exception {
		return openapiDao.insertRecord(paramMap);
	}

	@Override
	public int updateRecord(Map<String, Object> paramMap) throws Exception {
		return openapiDao.updateRecord(paramMap);
	}

	@Override
	public int deleteRecord(Map<String, Object> paramMap) throws Exception {
		return openapiDao.deleteRecord(paramMap);
	}

}