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
	<section>
		<h1>openapi</h1>
	</section>
	<jsp:include page="/WEB-INF/jsp/com/alticast/allso/cmmn/search.jsp"></jsp:include>
	<jsp:include page="/WEB-INF/jsp/com/alticast/allso/cmmn/table.jsp"></jsp:include>
  </div>
  <!-- /.content-wrapper -->
  <jsp:include page="/WEB-INF/jsp/com/alticast/allso/cmmn/footer.jsp"></jsp:include>
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
// 				method: 'GET',
// 				method: 'POST',
// 				method: 'PUT',
				method: 'DELETE',
/* 				
				data: {
					key1: '111',
					key2: 2,
					key3: {
						key1: '111',
						key2: 2,
					},
					key4: {
						key1: '111',
						key2: 2,
						key5: [{1: '일'},{2: '이'}],
					},
					key5: [{1: '일1'},{2: '이2'}],
				},
 */				
				data: {
					serviceId: 1,
				},
				success: function(data) {
					alert(JSON.stringify(data));
				}
			})
			
		});
	})();
</script>

</body>
</html>