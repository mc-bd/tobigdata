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
</head>

<body class="hold-transition tv_color sidebar-mini">
<div class="wrapper">
	<jsp:include page="/WEB-INF/jsp/com/alticast/allso/cmmn/header.jsp"></jsp:include>
	<jsp:include page="/WEB-INF/jsp/com/alticast/allso/cmmn/sidebar.jsp"></jsp:include>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
	<jsp:include page="/WEB-INF/jsp/com/alticast/allso/cmmn/navigation.jsp"></jsp:include>
    <!-- Main content -->
	<jsp:include page="/WEB-INF/jsp/com/alticast/allso/cmmn/search.jsp"></jsp:include>
	<jsp:include page="/WEB-INF/jsp/com/alticast/allso/cmmn/table.jsp"></jsp:include>
  </div>
  <!-- /.content-wrapper -->
  <jsp:include page="/WEB-INF/jsp/com/alticast/allso/cmmn/footer.jsp"></jsp:include>
</div>  
<!-- ./wrapper -->

<!-- REQUIRED JS SCRIPTS -->

<jsp:include page="/WEB-INF/jsp/com/alticast/allso/cmmn/js.jsp"></jsp:include>
<script>
	(function() {
		$(document).ready(function() {
			// 
			$('body').on('click', 'button.logout', function() {
				location.href = '<spring:message code="url.logout" />';
			});
			
			// 
			__.ajax({
				url: '/openapi',
				method: 'GET',
				async: false,
				data: {
				},
				success: function(data) {
					alert(JSON.stringify(data));
				}
			});
			
			//
			__.ajax({
				url: '/openapi/create',
				method: 'POST',
				async: false,
				data: {
					"serviceId": "11",
					"serviceName": "22",
					"managerName": "33",
					"managerTel": "44",
					"managerEmail": "55",
					"serviceIp": "66",
					"permissionKey": "77"
				},
				success: function(data) {
					alert(JSON.stringify(data));
				}
			});
			
			// 
			__.ajax({
				url: '/openapi',
				method: 'POST',
				async: false,
				data: {
					"serviceId": "11",
				},
				success: function(data) {
					alert(JSON.stringify(data));
				}
			});
			
			//
			__.ajax({
				url: '/openapi',
				method: 'PUT',
				async: false,
				data: {
					"serviceId": "11",
					"serviceName": "2",
					"managerName": "33",
					"managerTel": "44",
					"managerEmail": "55",
					"serviceIp": "66",
					"permissionKey": "77"
				},
				success: function(data) {
					alert(JSON.stringify(data));
				}
			});
			
			//
			__.ajax({
				url: '/openapi',
				method: 'DELETE',
				async: false,
				data: {
					"serviceId": "11",
				},
				success: function(data) {
					alert(JSON.stringify(data));
				}
			});
			
		});
	})();
</script>

</body>
</html>