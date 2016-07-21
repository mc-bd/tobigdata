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
	public List<Map<String, Object>> selectSites(
			Map<String, Object> paramMap) throws Exception {
		return recvDao.selectSites(paramMap);
	}

	@Override
	public int selectSitesTotCnt(Map<String, Object> paramMap) throws Exception {
		return recvDao.selectSitesTotCnt(paramMap);
	}

	@Override
	public Map<String, Object> selectSite(Map<String, Object> paramMap)
			throws Exception {
		return recvDao.selectSite(paramMap);
	}

	@Override
	public int insertSite(Map<String, Object> paramMap) throws Exception {
		return recvDao.insertSite(paramMap);
	}

	@Override
	public int updateSite(Map<String, Object> paramMap) throws Exception {
		return recvDao.updateSite(paramMap);
	}

	@Override
	public int deleteSite(Map<String, Object> paramMap) throws Exception {
		return recvDao.deleteSite(paramMap);
	}

}