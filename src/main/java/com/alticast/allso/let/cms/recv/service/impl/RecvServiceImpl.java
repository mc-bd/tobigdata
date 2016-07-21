package com.alticast.allso.let.cms.recv.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.alticast.allso.let.cms.recv.service.RecvService;

@Service("recvService")
public class RecvServiceImpl implements RecvService {
	
	@Resource(name = "recvMapper")
	private RecvMapper recvDao;

	@Override
	public List<Map<String, Object>> selectRecords(
			Map<String, Object> paramMap) throws Exception {
		return recvDao.selectRecords(paramMap);
	}

	@Override
	public int selectRecordsTotCnt(Map<String, Object> paramMap) throws Exception {
		return recvDao.selectRecordsTotCnt(paramMap);
	}

	@Override
	public Map<String, Object> selectRecord(Map<String, Object> paramMap)
			throws Exception {
		return recvDao.selectRecord(paramMap);
	}

	@Override
	public int insertRecord(Map<String, Object> paramMap) throws Exception {
		return recvDao.insertRecord(paramMap);
	}

	@Override
	public int updateRecord(Map<String, Object> paramMap) throws Exception {
		return recvDao.updateRecord(paramMap);
	}

	@Override
	public int deleteRecord(Map<String, Object> paramMap) throws Exception {
		return recvDao.deleteRecord(paramMap);
	}

}