package com.alticast.allso.let.cms.board.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.alticast.allso.let.cms.board.service.BoardService;

@Service("boardService")
public class BoardServiceImpl implements BoardService {
	
	@Resource(name = "boardMapper")
	private BoardMapper boardDao;

	@Override
	public List<Map<String, Object>> selectRecords(
			Map<String, Object> paramMap) throws Exception {
		return boardDao.selectRecords(paramMap);
	}

	@Override
	public int selectRecordsTotCnt(Map<String, Object> paramMap) throws Exception {
		return boardDao.selectRecordsTotCnt(paramMap);
	}

	@Override
	public Map<String, Object> selectRecord(Map<String, Object> paramMap)
			throws Exception {
		return boardDao.selectRecord(paramMap);
	}

	@Override
	public int insertRecord(Map<String, Object> paramMap) throws Exception {
		return boardDao.insertRecord(paramMap);
	}

	@Override
	public int updateRecord(Map<String, Object> paramMap) throws Exception {
		return boardDao.updateRecord(paramMap);
	}

	@Override
	public int deleteRecord(Map<String, Object> paramMap) throws Exception {
		return boardDao.deleteRecord(paramMap);
	}

}