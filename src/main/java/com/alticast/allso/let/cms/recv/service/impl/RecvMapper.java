package com.alticast.allso.let.cms.recv.service.impl;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("recvMapper")
public interface RecvMapper {
	
	public List<Map<String, Object>> selectRecords(Map<String, Object> paramMap) throws Exception;
	
	public int selectRecordsTotCnt(Map<String, Object> paramMap) throws Exception;
	
	public Map<String, Object> selectRecord(Map<String, Object> paramMap) throws Exception;
	
	public int insertRecord(Map<String, Object> paramMap) throws Exception;
	
	public int updateRecord(Map<String, Object> paramMap) throws Exception;

	public int deleteRecord(Map<String, Object> paramMap) throws Exception;
	
}