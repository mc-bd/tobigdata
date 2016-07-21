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
	public List<Map<String, Object>> selectSites(
			Map<String, Object> paramMap) throws Exception {
		return boardDao.selectSites(paramMap);
	}

	@Override
	public int selectSitesTotCnt(Map<String, Object> paramMap) throws Exception {
		return boardDao.selectSitesTotCnt(paramMap);
	}

	@Override
	public Map<String, Object> selectSite(Map<String, Object> paramMap)
			throws Exception {
		return boardDao.selectSite(paramMap);
	}

	@Override
	public int insertSite(Map<String, Object> paramMap) throws Exception {
		return boardDao.insertSite(paramMap);
	}

	@Override
	public int updateSite(Map<String, Object> paramMap) throws Exception {
		return boardDao.updateSite(paramMap);
	}

	@Override
	public int deleteSite(Map<String, Object> paramMap) throws Exception {
		return boardDao.deleteSite(paramMap);
	}

}