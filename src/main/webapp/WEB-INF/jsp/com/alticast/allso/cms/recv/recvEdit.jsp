<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html>

<html lang="ko-kr">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>ALLSOTV CMS</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
	<jsp:include page="/WEB-INF/jsp/com/alticast/allso/cmmn/css.jsp"></jsp:include>
	<style type="text/css">
		#pop > div.box-body > table > tbody > tr > th:nth-child(1),
		#pop > div.box-body > table > tbody > tr > th:nth-child(3) {
			width: 25%;
			background-color: #eeeeee;
		}
	</style>
</head>

<body>
<div id="pop">
  <h4 id="menu_title"></h4>
  <hr>
  <div class="box-body">
    <table class="table table-bordered">
    	<tbody>
	      <tr>
	        <th>일련번호</th>
	        <td><input class="form-control" type="text" placeholder="" id="ingestSeq" readonly="readonly"></td>
	      </tr>
	      <tr>
	        <th>입수방법</th>
	        <td>
               	  <select class="form-control" id="uploadType" disabled="disabled">
               	  	<option value="">선택</option>
               	  	<c:forEach var="code" items="${cmmnCodes.uploadTypeCodes}" varStatus="status">
                	  	<option value="${code.cmmnCode2}">${code.content}</option>
               	  	</c:forEach>
               	  </select>
        	</td>
	      </tr>
	      <tr>
	        <th>종류</th>
	        <td>
               	  <select class="form-control" id="contentType" disabled="disabled">
               	  	<option value="">선택</option>
               	  	<c:forEach var="code" items="${cmmnCodes.contentTypeCodes}" varStatus="status">
                	  	<option value="${code.cmmnCode2}">${code.content}</option>
               	  	</c:forEach>
               	  </select>	        
        	</td>
	      </tr>
	      <tr>
	        <th>제목</th>
	        <td><input class="form-control" type="text" placeholder="" id="contentTitle" ></td>
	      </tr>
	      <tr>
	        <th>파일명</th>
	        <td><input class="form-control" type="text" placeholder="" id="contentFilename" readonly="readonly"></td>
	      </tr>
	      <tr>
	        <th>저장위치</th>
	        <td><input class="form-control" type="text" placeholder="" id="contentUrl" readonly="readonly"></td>
	      </tr>
	      <tr>
	        <th>입수일시</th>
	        <td><input class="form-control" type="text" placeholder="" id="ingetDatetime" readonly="readonly"></td>
	      </tr>
    	</tbody>
    </table>
  </div>  
   
  <div class="pop_btn">
    <button type="button" class="btn btn-confirm none" id="insert">저장</button>
    <button type="button" class="btn btn-confirm none" id="edit">수정</button>
    <button type="button" class="btn btn-confirm none" id="update">저장</button>
    <button type="button" class="btn btn-confirm none" id="delete">삭제</button>
    <button type="button" class="btn btn-default none" id="close">취소</button>
    <button type="button" class="btn btn-default none" id="cansel">취소</button>
  </div>
</div>

<!-- REQUIRED JS SCRIPTS -->
<jsp:include page="/WEB-INF/jsp/com/alticast/allso/cmmn/js.jsp"></jsp:include>
<script src="/js/let/cms/recv/recv.js"></script>
<script>
	$(document).ready(function() {
		page.button.render();
		page.datepicker.render();		
		recv.recvGetDetailByPost();
	});
	(function() {
		var _page = {
				button: {
					render: function() {
						var mode = __.getMode();
						switch (mode) {
						case 'C':
							$('#insert').show();
							$('#close').show();
							break;
						case 'R':
							$('#edit').show();
							$('#delete').show();
							$('#close').show();
							break;
						case 'U':
							$('#update').show();
// 							$('#delete').show();
							$('#close').show();
							break;
						default:
							break;
						}
					},
				},
				datepicker: {
					render: function() {
					}
				}
		} 
		window.page = _page;
	})();
</script>

</body>
</html>