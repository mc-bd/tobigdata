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
	public Map<String, Object> apiUser(Map<String, Object> paramMap)
			throws Exception {
		return apiDao.apiUser(paramMap);
	}

}
