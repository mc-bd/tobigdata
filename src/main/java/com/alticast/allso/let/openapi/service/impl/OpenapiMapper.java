package com.alticast.allso.let.openapi.service.impl;

import java.util.HashMap;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("openapiMapper")
public interface OpenapiMapper {
	
	public Map<String, Object> openapiUser(HashMap<String, Object> paramMap) throws Exception;

}
