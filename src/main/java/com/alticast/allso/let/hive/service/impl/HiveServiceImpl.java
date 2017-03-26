package com.alticast.allso.let.hive.service.impl;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.alticast.allso.cmmn.util.HiveUtil;
import com.alticast.allso.let.hive.service.HiveService;
import com.alticast.allso.let.rserve.service.impl.RserveServiceImpl;

@Service("hiveService")
public class HiveServiceImpl implements HiveService {
	
	private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(RserveServiceImpl.class);

	@Override
	public Map<String, Object> selectAvgExpense(Map<String, Object> paramMap) throws Exception {
		
		Connection conn;
		Class.forName("org.apache.hive.jdbc.HiveDriver");
		conn = DriverManager.getConnection("jdbc:hive2://70.12.114.98:10000/default","root","111111");
		
		String query = "level, avg(CHACHACHA.housing) HOUSING, avg(CHACHACHA.transportation) TRANSPORTATION, avg(CHACHACHA.communication) COMMUNICATION, avg(CHACHACHA.supplies) SUPPLIES, avg(CHACHACHA.eatout) EATOUT, avg(CHACHACHA.food) FOOD, avg(CHACHACHA.soju) SOJU, avg(CHACHACHA.medical) MEDICAL, avg(CHACHACHA.clothing) CLOTHING, avg(CHACHACHA.education) EDUCATION, avg(CHACHACHA.entertainment) ENTERTAINMENT, avg(CHACHACHA.etc) ETC from CHACHACHA group by level having level=200";  // TODO
		
		return HiveUtil.selectList(conn, query);
	}

}
