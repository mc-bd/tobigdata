package com.alticast.allso.cmmn;

import java.util.Map;

public class Ajax {
	
	private Map<String, Object> data;
	private String message;
	
	private String status;
	private String statusText;
	
	public Map<String, Object> getData() {
		return data;
	}
	public Ajax setData(Map<String, Object> data) {
		this.data = data;
		return this;
	}
	public String getMessage() {
		return message;
	}
	public Ajax setMessage(String message) {
		this.message = message;
		return this;
	}
	public String getStatus() {
		return status;
	}
	public Ajax setStatus(String status) {
		this.status = status;
		return this;
	}
	public String getStatusText() {
		return statusText;
	}
	public Ajax setStatusText(String statusText) {
		this.statusText = statusText;
		return this;
	}

}
