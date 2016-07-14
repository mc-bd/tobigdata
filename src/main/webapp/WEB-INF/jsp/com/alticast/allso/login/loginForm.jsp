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
  <div class="content-wrapper">
    <section>
		<form action="<spring:message code="url.login" />" method="post">
			<input type="hidden" name="token" value="1234" />
			id:<br>
			<input type="text" name="id" /><br>
			password:<br>
			<input type="password" name="password" /><br>
			age:<br>
			<input type="number" name="age" /><br>
			<button type="submit" >로그인</button>
		</form>
    </section>
  </div>
  <!-- /.content-wrapper -->
</div>  
<!-- ./wrapper -->

<!-- REQUIRED JS SCRIPTS -->

<jsp:include page="/WEB-INF/jsp/com/alticast/allso/cmmn/js.jsp"></jsp:include>
<script>
</script>

</body>
</html>