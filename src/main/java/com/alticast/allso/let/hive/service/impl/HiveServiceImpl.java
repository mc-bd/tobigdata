package com.alticast.allso.let.hive.service.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.alticast.allso.let.hive.service.HiveService;

@Service("hiveService")
public class HiveServiceImpl implements HiveService {
	
	@Resource(name = "hiveMapper")
	private HiveMapper hiveDao;

	@Override
	public Map<String, Object> hiveUser(Map<String, Object> paramMap)
			throws Exception {
		return hiveDao.hiveUser(paramMap);
	}

}
