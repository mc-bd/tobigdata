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
        		<input type="hidden" id="ingestSeq">
        		<input type="hidden" id="uploadType">
        		<input type="hidden" id="contentType">
        		<input type="hidden" id="contentTitle">
        		<input type="hidden" id="ingetDatetime">
        		<input type="hidden" id="pageIndex">
              <table>
              	<tbody>
	                <tr>
	                  <th style="width:1%" ></th>
	                  <th style="width:9%" >일련번호</th>
	                  <th style="width:12%">
	                 	 <input class="form-control" type="text" id="ingestSeqTxt" placeholder="">
	                  </th>
	                  <th style="width:1%" ></th>
	                  <th style="width:9%">입수방법</th>
	                  <th style="width:12%">
	                	  <select id="uploadTypeTxt" class="form-control">
	                	  	<option value="">선택</option>
	                	  	<c:forEach var="code" items="${cmmnCodes.uploadTypeCodes}" varStatus="status">
		                	  	<option value="${code.cmmnCode2}">${code.content}</option>
	                	  	</c:forEach>
	                	  </select>	                 	 
	                  </th>
	                  <th style="width:1%" ></th>
	                  <th style="width:9%">종류</th>
	                  <th style="width:12%">
	                	  <select id="contentTypeTxt" class="form-control">
	                	  	<option value="">선택</option>
	                	  	<c:forEach var="code" items="${cmmnCodes.contentTypeCodes}" varStatus="status">
		                	  	<option value="${code.cmmnCode2}">${code.content}</option>
	                	  	</c:forEach>
	                	  </select>
	                  </th>
	                  <th style="width:1%" ></th>
	                  <th style="width:9%">제목</th>
	                  <th style="width:12%">
	                	  <input class="form-control" type="text" id="contentTitleTxt" placeholder="">
	                  </th>
	                  <th style="width:1%"></th>
	                  <th style="width:3%">
	                 	</th>
	                  <th style="width:1%"></th>
	                </tr>
	                <tr>
	                  <th style="width:1%" ></th>
	                  <th style="width:9%" >입수일시</th>
	                  <th style="width:12%">
	                	  <input class="form-control" type="text" id="ingetDatetimeTxt" placeholder="" readonly="readonly">
	                  </th>
	                  <th style="width:1%" ></th>
	                  <th style="width:9%"></th>
	                  <th style="width:12%">
	                  </th>
	                  <th style="width:1%" ></th>
	                  <th style="width:9%"></th>
	                  <th style="width:12%">
	                  </th>
	                  <th style="width:1%" ></th>
	                  <th style="width:9%"></th>
	                  <th style="width:12%">
	                  </th>
	                  <th style="width:1%"></th>
	                  <th style="width:3%">
	                  	<a href="javascript:;"><button type="button" class="btn btn-block btn-default" id="reset">초기화</button></a>
	                  	<a href="javascript:;"><button type="button" class="btn btn-block btn-default" id="search">조회</button></a>
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
	                  <th width="">입수방법</th>
	                  <th width="">종류</th>
	                  <th width="">제목</th>
	                  <th width="">입수일시</th>
	                </tr>
              	</thead>
              	<tbody></tbody>
              </table>
			<script type="text/template" id="recv-list-tr-template">
                <tr data-ingest-seq="{{ingestSeq}}">
                  <td>{{rnum}}</td>
                  <td>{{ingestSeq}}</td>
                  <td>{{uploadTypeTxt}}</td>
                  <td>{{contentTypeTxt}}</td>
                  <td>{{contentTitle}}</td>
                  <td>{{ingetDatetime}}</td>
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
<script src="/js/let/cms/recv/recv.js"></script>
<script>
	$(document).ready(function() {
		page.button.render();
		page.datepicker.render();
		recv.recvPostList();
	});
	(function() {
		var _page = {
				button: {
					render: function() {
// 						$('#add').show();
					}
				},
				datepicker: {
					render: function() {
						$('#ingetDatetimeTxt').datepicker(__.getDatepickerOptions());
					}
				}
		} 
		window.page = _page;
	})();	
</script>

</body>
</html>