package com.alticast.allso.let.api.service;

import java.util.Map;

public interface ApiService {

	Map<String, Object> apiMission(Map<String, Object> paramMap) throws Exception;
	
	Map<String, Object> apiIncome(Map<String, Object> paramMap) throws Exception;
	
	Map<String, Object> apiExpense(Map<String, Object> paramMap) throws Exception;
	
	Map<String, Object> apiSave(Map<String, Object> paramMap) throws Exception;

}
