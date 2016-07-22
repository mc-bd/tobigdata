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
	<style>
		input:read-only {
			background-color: white !important;
		}
	</style>
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

	<!-- section.content-search -->
    <section class="content-search">
       <div class="box">
          <div class="box-header"></div>
            <div class="box-body no-padding">
        		<input type="hidden" id="transSeq">
        		<input type="hidden" id="contentId">
        		<input type="hidden" id="contentTitle">
        		<input type="hidden" id="reqDatetime">
        		<input type="hidden" id="transState">
        		<input type="hidden" id="completeDatetime">
        		<input type="hidden" id="pageIndex">
              <table>
              	<tbody>
	                <tr>
	                  <th style="width:1%" ></th>
	                  <th style="width:9%" >일련번호</th>
	                  <th style="width:12%">
	                	  <input class="form-control" type="text" id="transSeqTxt" placeholder="" >
	                  </th>
	                  <th style="width:1%" ></th>
	                  <th style="width:9%" >콘텐츠 아이디</th>
	                  <th style="width:12%">
	                	  <input class="form-control" type="text" id="contentIdTxt" placeholder="" >
	                  </th>
	                  <th style="width:1%" ></th>
	                  <th style="width:9%" >변환 상태</th>
	                  <th style="width:12%">
	                	  <input class="form-control" type="text" id="transStateTxt" placeholder="" >
	                  </th>
	                  <th style="width:1%" ></th>
	                  <th style="width:9%" ></th>
	                  <th style="width:12%">
<!-- 	                  
	                	  <input class="form-control" type="text" id="contentTitleTxt" placeholder="" >
 -->	                	  
	                  </th>
	                  <th style="width:1%"></th>
	                  <th style="width:3%">
	                  	<a href="#"><button type="button" class="btn btn-block btn-default" id="reset">초기화</button></a>
	                  	<a href="#"><button type="button" class="btn btn-block btn-default" id="search">조회</button></a>
	                 	</th>
	                  <th style="width:1%"></th>
	                </tr>
	                <tr>
	                  <td style="height:20px"></td>
	                </tr>
              	</tbody>
              </table>
            </div>                   
        </div>
    </section>
    <!-- // section.content-search -->
    
    <!-- // section.content-table -->
    <section class="content-table">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-body table-responsive no-padding">
              <table class="table table-hover">
              	<thead>
	                <tr>
	                  <th width="5%">No</th>
	                  <th width="">일련번호</th>
	                  <th width="">콘텐츠 아이디</th>
	                  <th width="">변환 상태</th>
	                  <th width="15%">변환 요청일</th>
	                  <th width="15%">변환 완료일</th>
	                </tr>
              	</thead>
              	<tbody></tbody>
              </table>
			<script type="text/template" id="transcode-list-tr-template">
                <tr data-trans-seq="{{transSeq}}">
                  <td>{{rnum}}</td>
                  <td>{{transSeq}}</td>
                  <td>{{contentId}}</td>
                  <td>{{transState}}</td>
                  <td>{{reqDatetime}}</td>
                  <td>{{completeDatetime}}</td>
                </tr>
			</script>
            </div>
            <jsp:include page="/WEB-INF/jsp/com/alticast/allso/cmmn/pagination.jsp"></jsp:include>
          </div>
        </div>
      </div>
    </section>
	<!-- // section.content-table -->

  </div>
  <!-- /.content-wrapper -->
  <jsp:include page="/WEB-INF/jsp/com/alticast/allso/cmmn/footer.jsp"></jsp:include>
</div>  
<!-- ./wrapper -->

<!-- REQUIRED JS SCRIPTS -->

<jsp:include page="/WEB-INF/jsp/com/alticast/allso/cmmn/js.jsp"></jsp:include>
<script src="/js/let/cms/transcode/transcode.js"></script>
<script>
	$(document).ready(function() {
		page.button.render();
		page.datepicker.render();
		transcode.transcodePostList();
	});
	(function() {
		var _page = {
				button: {
					render: function() {
						$('#add').show();
					}
				},
				datepicker: {
					render: function() {
						$('#createDatetimeTxt').datepicker(__.getDatepickerOptions());
					}
				}
		} 
		window.page = _page;
	})();	
</script>

</body>
</html>