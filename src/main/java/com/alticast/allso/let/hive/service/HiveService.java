package com.alticast.allso.let.hive.service;

import java.util.Map;

public interface HiveService {

	Map<String, Object> selectAvgExpense(Map<String, Object> paramMap) throws Exception;

	Map<String, Object> selectAvgSave(Map<String, Object> paramMap) throws Exception;

}
