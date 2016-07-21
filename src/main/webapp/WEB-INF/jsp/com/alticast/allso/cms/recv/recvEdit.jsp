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
	        <th>서비스 ID</th>
	        <td><input class="form-control" type="text" placeholder="" id="serviceId" readonly="readonly"></td>
	      </tr>
	      <tr>
	        <th>서비스 명</th>
	        <td><input class="form-control" type="text" placeholder="" id="serviceName"></td>
	      </tr>
	      <tr>
	        <th>담당자 명</th>
	        <td><input class="form-control" type="text" placeholder="" id="managerName"></td>
	      </tr>
	      <tr>
	        <th>담당자 연락처</th>
	        <td><input class="form-control" type="text" placeholder="" id="managerTel"></td>
	      </tr>
	      <tr>
	        <th>담당자 e-mail</th>
	        <td><input class="form-control" type="text" placeholder="" id="managerEmail"></td>
	      </tr>
	      <tr>
	        <th>IP정보</th>
	        <td><input class="form-control" type="text" placeholder="" id="serviceIp"></td>
	      </tr>
	      <tr>
	        <th>서비스 인증키</th>
	        <td><input class="form-control" type="text" placeholder="" id="permissionKey"></td>
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
<script src="/js/let/recv/recv.js"></script>
<script>
	$(document).ready(function() {
		page.showButton();
		recv.recvGetDetailByPost();
	});
	(function() {
		var _page = {
				showButton: function() {
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
						$('#delete').show();
						$('#close').show();
						break;
					default:
						break;
					}
				}
		} 
		window.page = _page;
	})();
</script>

</body>
</html>