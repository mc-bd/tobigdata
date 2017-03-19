package com.alticast.allso.let.hive.service.impl;

import java.util.HashMap;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("hiveMapper")
public interface HiveMapper {
	
	public Map<String, Object> hiveUser(Map<String, Object> paramMap) throws Exception;

}
