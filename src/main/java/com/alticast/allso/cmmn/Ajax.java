package com.alticast.allso.cmmn;

import java.util.Map;

import org.springframework.http.HttpStatus;

import com.alticast.allso.cmmn.util.CmmnUtil;

public class Ajax {
	
	private Map<String, Object> data;
	private String message;
	
	private HttpStatus status;
	private int statusCode;
	private String statusText;
	
	public Ajax() {
		setStatus(HttpStatus.OK);
	}

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

	public HttpStatus getStatus() {
		return status;
	}

	/**
	 * set; code, text
	 * 
	 * @param status
	 */
	public Ajax setStatus(HttpStatus status) {
		this.status = status;
		setStatusCode(status.value());
		setStatusText(status.name());
		return this;
	}

	public int getStatusCode() {
		return statusCode;
	}

	private Ajax setStatusCode(int statusCode) {
		this.statusCode = statusCode;
		return this;
	}

	public String getStatusText() {
		return statusText;
	}

	private Ajax setStatusText(String statusText) {
		this.statusText = statusText;
		return this;
	}
	
	
	/**
	 * @return
	 */
	public String toJSON() {
		return CmmnUtil.convertJSON(this);
	}

}
