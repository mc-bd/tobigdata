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
    <!-- section.content -->
    <section class="content">
    	<!-- div.row -->
    	<div class="row">
    		<!-- div.col -->
	    	<div class="col-xs-12">
	    	
	    		<!-- div.nav-tabs-custom -->
	    		<!-- // div.nav-tabs-custom -->
	    		
		       <!-- div.box -->
		       <div class="box">
		          <div class="box-header"></div>
		            <div class="box-body no-padding">
		        		<input type="hidden" id="userId">
		        		<input type="hidden" id="userName">
		        		<input type="hidden" id="userGender">
		        		<input type="hidden" id="userCell">
		        		<input type="hidden" id="userJoinDate">
		        		<input type="hidden" id="pageIndex">
		              <table>
		              	<tbody>
			                <tr>
			                  <th style="width:1%" ></th>
			                  <th style="width:9%">아이디</th>
			                  <th style="width:12%">
			                	  <input class="form-control" type="text" id="userIdTxt" placeholder="" >
			                  </th>
			                  <th style="width:1%" ></th>
			                  <th style="width:9%">이름</th>
			                  <th style="width:12%">
			                	  <input class="form-control" type="text" id="userNameTxt" placeholder="" >
			                  </th>
			                  <th style="width:1%" ></th>
			                  <th style="width:9%">성별</th>
			                  <th style="width:12%">
			                	  <select id="userGenderTxt" class="form-control">
			                	  	<option value="">선택</option>
<%-- 			                	  	<c:forEach var="code" items="${cmmnCodes.userGenderCodes}" varStatus="status"> --%>
			                	  	<c:forEach var="code" items="${cmmnCodes.genderCodes}" varStatus="status">
				                	  	<option value="${code.cmmnCode2}">${code.content}</option>
			                	  	</c:forEach>
			                	  </select>			                  
			                  </th>
			                  <th style="width:1%" ></th>
			                  <th style="width:9%">전화번호</th>
			                  <th style="width:12%">
			                	  <input class="form-control" type="text" id="userCellTxt" placeholder="" >
			                  </th>
			                  <th style="width:1%"></th>
			                  <th style="width:3%">
			                 	</th>
			                  <th style="width:1%"></th>
			                </tr>
			                <tr>
			                  <th style="width:1%" ></th>
			                  <th style="width:9%">가입일</th>
			                  <th style="width:12%">
			                	  <input class="form-control" type="text" id="userJoinDateTxt" placeholder="" readonly="readonly">
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
		        <!-- // div.box -->	    		
		        
				  <!-- div.box -->      
		          <div class="box table-list">
		            <div class="box-body table-responsive no-padding">
		              <table class="table table-hover">
		              	<thead>
			                <tr>
			                  <th class="w-no">No</th>
			                  <th class="">아이디</th>
			                  <th class="">이름</th>
			                  <th class="">성별</th>
			                  <th class="">전화번호</th>
			                  <th class="w-datetime">가입일</th>
			                </tr>
		              	</thead>
		              	<tbody></tbody>
		              </table>
					<script type="text/template" id="useradmin-list-tr-template">
		                <tr data-user-id="{{userId}}">
		                  <td>{{rnum}}</td>
		                  <td>{{userId}}</td>
		                  <td>{{userName}}</td>
		                  <td>{{userGenderTxt}}</td>
		                  <td>{{userCell}}</td>
		                  <td>{{userJoinDate}}</td>
		                </tr>
					</script>		              
		            </div>
		            <jsp:include page="/WEB-INF/jsp/com/alticast/allso/cmmn/pagination.jsp"></jsp:include>
		          </div>		        
		          <!-- // div.box -->
		        
			</div>
    		<!-- // div.col -->
		</div>
    	<!-- // div.row -->
    </section>
    <!-- // section.content -->    




	<!-- section.content-search -->
    <section class="content-search">
       <div class="box">
          <div class="box-header"></div>
            <div class="box-body no-padding">
        		<input type="hidden" id="connectTime">
        		<input type="hidden" id="keyWord">
        		<input type="hidden" id="locationInfo">
              <table>
              	<tbody>
	                <tr>
	                  <th style="width:1%" ></th>
	                  <th style="width:9%" >접속시간</th>
	                  <th style="width:12%">
	                 	 <input class="form-control" type="text" id="connectTimeTxt" placeholder="" readonly="readonly">
	                  </th>
	                  <th style="width:1%" ></th>
	                  <th style="width:9%">검색어</th>
	                  <th style="width:12%">
	                 	 <input class="form-control" type="text" id="keyWordTxt" placeholder="">
	                  </th>
	                  <th style="width:1%" ></th>
	                  <th style="width:9%">위치정보</th>
	                  <th style="width:12%">

	                	  <input class="form-control" type="text" id="locationInfoTxt" placeholder="">
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
    
    <!-- // div.table-list -->
    <section class="content-table">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-body table-responsive no-padding">
              <table class="table table-hover">
              	<thead>
	                <tr>
	                  <th width="5%">No</th>
	                  <th width="">접속시간</th>
	                  <th width="">검색어</th>
	                  <th width="">위치정보</th>
	                </tr>
              	</thead>
              	<tbody></tbody>
              </table>
			<script type="text/template" id="searchlog-list-tr-template">
                <tr data-service-id="{{connectTime}}">
                  <td>{{rnum}}</td>
                  <td>{{connectTime}}</td>
                  <td>{{keyWord}}</td>
                  <td>{{locationInfo}}</td>
                </tr>
			</script>
            </div>
            <jsp:include page="/WEB-INF/jsp/com/alticast/allso/cmmn/pagination.jsp"></jsp:include>
          </div>
        </div>
      </div>
    </section>
	<!-- // div.table-list -->

  </div>
  <!-- /.content-wrapper -->
  <jsp:include page="/WEB-INF/jsp/com/alticast/allso/cmmn/footer.jsp"></jsp:include>
</div>  
<!-- ./wrapper -->

<!-- REQUIRED JS SCRIPTS -->

<jsp:include page="/WEB-INF/jsp/com/alticast/allso/cmmn/js.jsp"></jsp:include>
<script src="/js/let/presentation/searchlog/searchlog.js"></script>
<script>
	$(document).ready(function() {
		page.button.render();
		page.datepicker.render();
		searchlog.searchlogPostList();
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
						$('#connectTimeTxt').datepicker(__.getDatepickerOptions());
					}
				}
		} 
		window.page = _page;
	})();	
</script>

</body>
</html>