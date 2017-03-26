package com.alticast.allso.cmmn.util;

import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class HiveUtil {
	
	public static Map<String, Object> selectList(Connection conn, String query) throws IOException {

		Statement stmt = null;
		ResultSet rs = null;
		
		JSONObject jo = new JSONObject();
		JSONArray ja = new JSONArray();
		
		try {
			stmt = conn.createStatement();
			rs = stmt.executeQuery(query);

			while (rs.next()) {
		        Map<String, Object> rtmap = new HashMap<String, Object>();
		        if(rs != null) {
		            ResultSetMetaData rsmd = rs.getMetaData();
		            int columnCount = rsmd.getColumnCount();
		           
		            for (int i = 1; i <= columnCount; i++) {
		               
		                String columnName = rsmd.getColumnName(i);
		                Object columnValue = rs.getObject(i);
		                               
		                rtmap.put(columnName, columnValue);               
		            }
		        }
		        ja.add(rtmap);
			}
			jo.put("data", ja);

			System.out.println(jo.toJSONString());
			System.out.println(ja.toJSONString());

			// conn.close();
			System.out.println("Success....");

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
		     if ( rs != null ) try{rs.close();}catch(Exception e){} 
		     if ( stmt != null ) try{stmt.close();}catch(Exception e){}
		     if ( conn != null ) try{conn.close();}catch(Exception e){}
		}
		
		return jo;
	}	

}
