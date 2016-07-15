package com.alticast.allso.let.openapi.service.impl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.alticast.allso.let.openapi.service.OpenapiService;

@Service("openapiService")
public class OpenapiServiceImpl implements OpenapiService {
	
	@Resource(name = "openapiMapper")
	private OpenapiMapper openapiDao;

	@Override
	public Map<String, Object> openapiUser(HashMap<String, Object> paramMap) throws Exception {
		return openapiDao.openapiUser(paramMap);
	}

}