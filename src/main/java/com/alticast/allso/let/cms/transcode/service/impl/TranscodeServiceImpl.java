package com.alticast.allso.let.cms.transcode.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.alticast.allso.let.cms.transcode.service.TranscodeService;

@Service("transcodeService")
public class TranscodeServiceImpl implements TranscodeService {
	
	@Resource(name = "transcodeMapper")
	private TranscodeMapper transcodeDao;

	@Override
	public List<Map<String, Object>> selectRecords(
			Map<String, Object> paramMap) throws Exception {
		return transcodeDao.selectRecords(paramMap);
	}

	@Override
	public int selectRecordsTotCnt(Map<String, Object> paramMap) throws Exception {
		return transcodeDao.selectRecordsTotCnt(paramMap);
	}

	@Override
	public Map<String, Object> selectRecord(Map<String, Object> paramMap)
			throws Exception {
		return transcodeDao.selectRecord(paramMap);
	}

	@Override
	public int insertRecord(Map<String, Object> paramMap) throws Exception {
		return transcodeDao.insertRecord(paramMap);
	}

	@Override
	public int updateRecord(Map<String, Object> paramMap) throws Exception {
		return transcodeDao.updateRecord(paramMap);
	}

	@Override
	public int deleteRecord(Map<String, Object> paramMap) throws Exception {
		return transcodeDao.deleteRecord(paramMap);
	}

}