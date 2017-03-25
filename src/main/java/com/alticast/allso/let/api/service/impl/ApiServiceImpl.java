package com.alticast.allso.let.api.service.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.alticast.allso.let.api.service.ApiService;

@Service("apiService")
public class ApiServiceImpl implements ApiService {

	@Resource(name = "apiMapper")
	private ApiMapper apiDao;

	@Override
	public Map<String, Object> apiMission(Map<String, Object> paramMap) throws Exception {
		return apiDao.apiMission(paramMap);
	}

	@Override
	public Map<String, Object> apiIncome(Map<String, Object> paramMap) throws Exception {
		return apiDao.apiIncome(paramMap);
	}

	@Override
	public Map<String, Object> apiExpense(Map<String, Object> paramMap) throws Exception {
		return apiDao.apiExpense(paramMap);
	}

	@Override
	public Map<String, Object> apiSave(Map<String, Object> paramMap) throws Exception {
		return apiDao.apiSave(paramMap);
	}

}
