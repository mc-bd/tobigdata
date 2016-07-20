package com.alticast.allso.cmmn;

import egovframework.rte.ptl.mvc.tags.ui.pagination.PaginationInfo;

public class PaginationInf {
	
	private PaginationInfo paginationInfo; // 도우미 객체 (기 구현 Class)
	
	private int currentPageNo;
	private int recordCountPerPage;
	private int pageSize;
	private int totalRecordCount;
	
	public PaginationInf() {
		paginationInfo = new PaginationInfo();
	}
	
	// 
	// set 호출 시, 도우미 객체에도 set
	// 
	
	public void setCurrentPageNo(int currentPageNo) {
		this.currentPageNo = currentPageNo;
		this.paginationInfo.setCurrentPageNo(currentPageNo);
	}
	public void setRecordCountPerPage(int recordCountPerPage) {
		this.recordCountPerPage = recordCountPerPage;
		this.paginationInfo.setRecordCountPerPage(recordCountPerPage);
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
		this.paginationInfo.setPageSize(pageSize);
	}
	public void setTotalRecordCount(int totalRecordCount) {
		this.totalRecordCount = totalRecordCount;
		this.paginationInfo.setTotalRecordCount(totalRecordCount);
	}
	
	public int getRecordCountPerPage() {
		return recordCountPerPage;
	}

	public int getCurrentPageNo() {
		return currentPageNo;
	}

	public int getPageSize() {
		return pageSize;
	}

	public int getTotalRecordCount() {
		return totalRecordCount;
	}


	private int totalPageCount;
	private int firstPageNoOnPageList;
	private int lastPageNoOnPageList;
	private int firstRecordIndex;
	private int lastRecordIndex;
	
	public void setTotalPageCount() {
		this.totalPageCount = this.paginationInfo.getTotalPageCount();
	}
	public void setFirstPageNoOnPageList() {
		this.firstPageNoOnPageList = this.paginationInfo.getFirstPageNoOnPageList();
	}
	public void setLastPageNoOnPageList() {
		this.lastPageNoOnPageList = this.paginationInfo.getLastPageNoOnPageList();
	}
	public void setFirstRecordIndex() {
		this.firstRecordIndex = this.paginationInfo.getFirstRecordIndex();
	}
	public void setLastRecordIndex() {
		this.lastRecordIndex = this.paginationInfo.getLastRecordIndex();
	}
	
	// 
	// 도우미 객체에서 get 호출 -> set 필드
	// 
	
	public void setOthers() {
		this.setTotalPageCount();
		this.setFirstPageNoOnPageList();
		this.setLastPageNoOnPageList();
		this.setFirstRecordIndex();
		this.setLastRecordIndex();
//		this.paginationInfo = null;
	}

	public int getFirstRecordIndex() {
		return this.paginationInfo.getFirstRecordIndex();
	}

	public int getLastRecordIndex() {
		return this.paginationInfo.getLastRecordIndex();
	}

	public int getTotalPageCount() {
		return totalPageCount;
	}

	public int getFirstPageNoOnPageList() {
		return firstPageNoOnPageList;
	}

	public int getLastPageNoOnPageList() {
		return lastPageNoOnPageList;
	}
	
	
}