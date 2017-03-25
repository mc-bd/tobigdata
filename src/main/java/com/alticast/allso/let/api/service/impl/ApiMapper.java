package com.alticast.allso.let.api.service.impl;

import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("apiMapper")
public interface ApiMapper {
	
	public Map<String, Object> apiMission(Map<String, Object> paramMap) throws Exception;
	
	public Map<String, Object> apiIncome(Map<String, Object> paramMap) throws Exception;
	
	public Map<String, Object> apiExpense(Map<String, Object> paramMap) throws Exception;
	
	public Map<String, Object> apiSave(Map<String, Object> paramMap) throws Exception;

}
