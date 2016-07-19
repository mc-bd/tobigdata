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

<body>
<div id="pop">
  <h4>HOT 키워드 관리</h4>
  <hr>
  <div class="box-body">
    <table class="table table-bordered">
      <tr>
        <th style="width: 30%" bgcolor="#eeeeee">HOT 키워드 타이틀</th>
        <td><input class="form-control" type="text" placeholder="2016년 6월1주차 핫키워드"></td>
      </tr>
      <tr>
        <th style="width: 30%" bgcolor="#eeeeee">활성화</th>
        <td>
        <div class="form-group">
           <div class="checkbox">
            <label>
              <input type="checkbox">활성화</label>
           </div>
         </div>
       </td>
     </tr>
    </table>
  </div>   
  <div class="box-body">
    <table class="table table-bordered">
      <tr>
        <th style="width: 30%" bgcolor="#eeeeee">HOT 키워드 1</th>
        <td><input class="form-control" type="text" placeholder="LG"></td>
      </tr>
      <tr>
        <th style="width: 30%" bgcolor="#eeeeee">HOT 키워드 2</th>
        <td><input class="form-control" type="text" placeholder="박기량"></td>
      </tr>
       <tr>
        <th style="width: 30%" bgcolor="#eeeeee">HOT 키워드 3</th>
        <td><input class="form-control" type="text" placeholder="박기량"></td>
      </tr>
    </table>
  </div>  
   
  <div class="pop_btn">
    <button type="button" class="btn btn-confirm">저장</button>
    <button type="button" class="btn btn-default">취소</button>
  </div>
</div>

<!-- REQUIRED JS SCRIPTS -->
<jsp:include page="/WEB-INF/jsp/com/alticast/allso/cmmn/js.jsp"></jsp:include>
<script src="/js/let/openapi/openapi.js"></script>
<script>
	$(document).ready(function() {
	});
</script>

</body>
</html>