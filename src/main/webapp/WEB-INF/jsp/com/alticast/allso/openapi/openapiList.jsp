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

	<!-- section.content-search -->
    <section class="content-search">
       <div class="box">
          <div class="box-header"></div>
            <div class="box-body no-padding">
        		<input type="hidden" id="serviceId">
        		<input type="hidden" id="serviceName">
        		<input type="hidden" id="managerName">
        		<input type="hidden" id="serviceIp">
              <table>
              	<tbody>
	                <tr>
	                  <th style="width:1%" ></th>
	                  <th style="width:9%" >서비스 ID</th>
	                  <th style="width:12%">
	                 	 <input class="form-control" type="text" id="serviceIdTxt" placeholder="">
	                  </th>
	                  <th style="width:1%" ></th>
	                  <th style="width:9%">서비스 명</th>
	                  <th style="width:12%">
	                 	 <input class="form-control" type="text" id="serviceNameTxt" placeholder="">
	                  </th>
	                  <th style="width:1%" ></th>
	                  <th style="width:9%">담당자 명</th>
	                  <th style="width:12%">

	                	  <input class="form-control" type="text" id="managerNameTxt" placeholder="">
	                  </th>
	                  <th style="width:1%" ></th>
	                  <th style="width:9%">IP</th>
	                  <th style="width:12%">
	                	  <input class="form-control" type="text" id="serviceIpTxt" placeholder="">
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
	                  <th width="">서비스 ID</th>
	                  <th width="">서비스 명</th>
	                  <th width="">담당자 명</th>
	                  <th width="">IP</th>
	                </tr>
              	</thead>
              	<tbody></tbody>
              </table>
			<script type="text/template" id="openapi-list-tr-template">
                <tr data-service-id="{{serviceId}}">
                  <td>{{rnum}}</td>
                  <td>{{serviceId}}</td>
                  <td>{{serviceName}}</td>
                  <td>{{managerName}}</td>
                  <td>{{serviceIp}}</td>
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
<script src="/js/let/openapi/openapi.js"></script>
<script>
	$(document).ready(function() {
		page.showButton();
		openapi.openapiPostList();
	});
	(function() {
		var _page = {
				showButton: function() {
					$('#add').show();
				}
		} 
		window.page = _page;
	})();	
</script>

</body>
</html>