package com.alticast.allso.cmmn.service.impl;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("cmmnMapper")
public interface CmmnMapper {

	List<Map<String, Object>> selectCmmnCode(Map<String, Object> paramMap);

}
