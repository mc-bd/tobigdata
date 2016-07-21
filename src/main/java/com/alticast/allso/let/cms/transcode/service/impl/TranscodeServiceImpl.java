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
	public List<Map<String, Object>> selectSites(
			Map<String, Object> paramMap) throws Exception {
		return transcodeDao.selectSites(paramMap);
	}

	@Override
	public int selectSitesTotCnt(Map<String, Object> paramMap) throws Exception {
		return transcodeDao.selectSitesTotCnt(paramMap);
	}

	@Override
	public Map<String, Object> selectSite(Map<String, Object> paramMap)
			throws Exception {
		return transcodeDao.selectSite(paramMap);
	}

	@Override
	public int insertSite(Map<String, Object> paramMap) throws Exception {
		return transcodeDao.insertSite(paramMap);
	}

	@Override
	public int updateSite(Map<String, Object> paramMap) throws Exception {
		return transcodeDao.updateSite(paramMap);
	}

	@Override
	public int deleteSite(Map<String, Object> paramMap) throws Exception {
		return transcodeDao.deleteSite(paramMap);
	}

}