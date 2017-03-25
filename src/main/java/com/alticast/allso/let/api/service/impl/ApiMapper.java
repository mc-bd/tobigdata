package com.alticast.allso.let.api.service.impl;

import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("apiMapper")
public interface ApiMapper {
	
	public Map<String, Object> apiUser(Map<String, Object> paramMap) throws Exception;

}
