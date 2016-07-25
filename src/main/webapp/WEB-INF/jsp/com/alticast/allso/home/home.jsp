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
    
     <section class="content">
      <div class="row">
        <div class="col-md-6">
        
          <div class="box">
            <div class="box-body no-padding">
              <table class="table" id="table-recv">
                <tr>
                  <th colspan="4">입수현황</th>
                </tr>
                <tr data-day="0" data-content-type="U">
                  <td width="18">1.</td>
                  <td width="276">금일 입수 현황</td>
                  <td width="128">(사용자업로드)</td>
                  <td width="205"></td>
                </tr>
                <tr data-day="0" data-content-type="C">
                  <td>2.</td>
                  <td>금일 입수 현황</td>
                  <td>(소셜 비디오)</td>
                  <td>-</td>
                </tr>
                <tr data-day="0" data-content-type="B">
                  <td>3.</td>
                  <td>금일 입수 현황</td>
                  <td>(방송용 콘텐츠)</td>
                  <td>-</td>
                </tr>
                <tr data-day="-1" data-content-type="U">
                  <td>4.</td>
                  <td>어제 입수 현황</td>
                  <td>(사용자업로드)</td>
                  <td>-</td>
                </tr>
                <tr data-day="-1" data-content-type="C">
                  <td>5.</td>
                  <td>어제 입수 현황</td>
                  <td>(소셜 비디오)</td>
                  <td>-</td>
                </tr>
                <tr data-day="-1" data-content-type="B">
                  <td>6.</td>
                  <td>어제 입수 현황</td>
                  <td>(방송용 콘텐츠)</td>
                  <td>-</td>
                </tr>
              </table>
            </div>
		 </div>
		 <!-- // .box -->
		 
          <div class="box">
            <div class="box-body no-padding">
              <table class="table" id="table-board">
                <tr>
                  <th colspan="4">배포현황</th>
                </tr>
                <tr data-day="0" data-type="M">
                  <td width="18">1.</td>
                  <td width="308">금일 배포 현황</td>
                  <td width="95">엔진</td>
                  <td width="206">-</td>
                </tr>
                <tr data-day="0" data-type="B">
                  <td>2.</td>
                  <td>금일 배포 현황</td>
                  <td>송출</td>
                  <td>-</td>
                </tr>
                <tr data-day="-1" data-type="M">
                  <td>3.</td>
                  <td>어제 배포 현황</td>
                  <td>엔진</td>
                  <td>-</td>
                </tr>
                <tr data-day="-1" data-type="B">
                  <td>4.</td>
                  <td>어제 배포 현황</td>
                  <td>송출</td>
                  <td>-</td>
                </tr>
              </table>
            </div>
		 </div>
		 <!-- // .box -->
		 
       </div>
       <!-- // .col-md-6 -->
       
       <div class="col-md-6">
       
          <div class="box">
            <div class="box-body no-padding">
              <table class="table" id="table-transcode">
                <tr>
                  <th colspan="4">변환 현황</th>
                </tr>
                <tr data-day="0" data-trans-state="C">
                  <td width="18">1.</td>
                  <td width="310">금일 변환 현황</td>
                  <td width="95"><span class="badge bg-light-blue">변환 완료</span></td>
                   <td width="204"><span class="badge bg-light-blue">-</span></td>
                </tr>
                <tr data-day="0" data-trans-state="I">
                  <td>2.</td>
                  <td>금일 변환 현황</td>
                  <td><span class="badge bg-red">변환 중</span></td>
                   <td><span class="badge bg-red">-</span></td>
                </tr>
                <tr data-day="-1" data-trans-state="C">
                  <td>3.</td>
                  <td>어제 변환 현황</td>
                  <td><span class="badge bg-light-blue">변환 완료</span></td>
                  <td><span class="badge bg-light-blue">-</span></td>
                </tr>
                <tr data-day="-1" data-trans-state="I">
                  <td>4.</td>
                  <td>어제 변환 현황</td>
                  <td><span class="badge bg-red">변환 중</span></td>
                  <td><span class="badge bg-red">-</span></td>
                </tr>
              </table>
            </div>
		 </div>
		 <!-- // .box -->
		 
         <div class="box">
             <div class="box-body no-padding">
              <table class="table" id="table-openapi">
                <tr>
                  <th colspan="3">Open API 사이트 등록 현황</th>
                </tr>
                <tr data-day="0">
                  <td width="18">1.</td>
                  <td width="414">금일 등록 현황</td>
                  <td width="199">-</td>
                </tr>
                <tr data-day="-1">
                  <td>2.</td>
                  <td>어제 등록 현황</td>
                  <td>-</td>
                </tr>
              </table>
            </div>
		 </div>
		 <!-- // .box -->
		 
        </div>
        <!-- // .col-md-6 -->
        
      </div>
      <!-- // .row -->
      
     </section>
     <!--// .content -->
     
     
  </div>
  <!-- /.content-wrapper -->
  <jsp:include page="/WEB-INF/jsp/com/alticast/allso/cmmn/footer.jsp"></jsp:include>
</div>  
<!-- ./wrapper -->

<!-- REQUIRED JS SCRIPTS -->

<jsp:include page="/WEB-INF/jsp/com/alticast/allso/cmmn/js.jsp"></jsp:include>
<script src="/js/let/home/home.js"></script>
<script>
	$(document).ready(function() {
	});
	(function() {
		var _page = {
		} 
		window.page = _page;
	})();	
</script>

</body>
</html>