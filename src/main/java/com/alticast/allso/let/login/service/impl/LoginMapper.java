package com.alticast.allso.let.login.service.impl;

import java.util.HashMap;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("loginMapper")
public interface LoginMapper {
	
	public Map<String, Object> loginUser(Map<String, Object> paramMap) throws Exception;

}
