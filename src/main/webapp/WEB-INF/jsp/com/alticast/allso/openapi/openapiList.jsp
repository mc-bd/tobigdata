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
              <table>
                <tr>
                  <th style="width:1%" ></th>
                  <th style="width:4%" >일련번호</th>
                  <th style="width:12%">
                 	 <input class="form-control" type="text" placeholder="일련번호">
                  </th>
                  <th style="width:1%" ></th>
                  <th style="width:4%">입수방법</th>
                  <th style="width:10%">
                      <select class="form-control">
                        <option>선택 1</option>
                        <option>선택 2</option>
                        <option>선택 3</option>
                        <option>선택 4</option>
                        <option>선택 5</option>
                      </select>
                  </th>
                  <th style="width:1%" ></th>
                  <th style="width:3%">종류</th>
                  <th style="width:10%">
                      <select class="form-control">
                        <option>선택 1</option>
                        <option>선택 2</option>
                        <option>선택 3</option>
                        <option>선택 4</option>
                        <option>선택 5</option>
                      </select>
                  </th>
                  <th style="width:1%" ></th>
                  <th style="width:3%">제목</th>
                  <th style="width:30%">
                 	 <input class="form-control" type="text" placeholder="제목">
                  </th>
                  <th style="width:1%" ></th>
                  <th style="width:4%">입수일시</th>
                  <th style="width:10%">
                	  <input class="form-control" type="text" placeholder="입시일시">
                  </th>
                  <th style="width:1%"></th>
                  <th style="width:3%"><a href="#"><button type="button" class="btn btn-block btn-default">조회</button></a></th>
                  <th style="width:1%"></th>
                </tr>
                <tr>
                  <td style="height:20px"></td>
                </tr>
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
                <tr>
                  <th width="2%"></th>
                  <th width="15%">일련번호</th>
                  <th width="18%">입수방법</th>
                  <th width="12%">종류</th>
                  <th width="40%">제목</th>
                  <th width="13%">입수일시</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>00000000</td>
                  <td>사용자업로드</td>
                  <td>프로그램</td>
                  <td>콘텐츠 제목입니다.</td>
                  <td>2016.04.01 13:00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>00000000</td>
                  <td>사용자업로드</td>
                  <td>프로그램</td>
                  <td>콘텐츠 제목입니다.</td>
                  <td>2016.04.01 13:00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>00000000</td>
                  <td>사용자업로드</td>
                  <td>프로그램</td>
                  <td>콘텐츠 제목입니다.</td>
                  <td>2016.04.01 13:00</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>00000000</td>
                  <td>사용자업로드</td>
                  <td>프로그램</td>
                  <td>콘텐츠 제목입니다.</td>
                  <td>2016.04.01 13:00</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>00000000</td>
                  <td>사용자업로드</td>
                  <td>프로그램</td>
                  <td>콘텐츠 제목입니다.</td>
                  <td>2016.04.01 13:00</td>
                </tr>
              </table>
            </div>
            <jsp:include page="/WEB-INF/jsp/com/alticast/allso/cmmn/pagination.jsp"></jsp:include>
          </div>
        </div>
      </div>
    </section>
	<!-- // section.content-table -->
			<script type="text/template">
                <tr id="openapiListTrTemplate">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
			</script>

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
		$('#add').show();
		openapiPostList();
	});
</script>

</body>
</html>