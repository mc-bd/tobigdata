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
  <!-- tv_style 3.3.6 -->
  <link rel="stylesheet" href="tv_style/css/tv_style.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="dist/css/tv.min.css">
  <link rel="stylesheet" href="dist/css/skins/tv_color.min.css">
</head>


<body class="hold-transition tv_color sidebar-mini">
<div class="wrapper">
  <!-- Main Header -->
  <header class="main-header">
    <!-- Logo -->
    <a href="#" class="logo">
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>ALLSO</b>TV</span>
    </a>

    <!-- Header Navbar -->
    <nav class="navbar navbar-static-top" role="navigation">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- User Account Menu -->
          <li class="dropdown user user-menu">
            <!-- Menu Toggle Button -->
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <!-- hidden-xs hides the username on small devices so only the image appears. -->
              <span class="hidden-xs">Adim (홍길동)님 접속중</span>
            </a>
          </li>
          <!-- Control Sidebar Toggle Button -->
          <li>
            <a href="<spring:message code="url.logout" />" data-toggle="control-sidebar"> <button type="button" class="btn btn-block btn-default btn-xs">로그아웃</button></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  
   <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

      <!-- Sidebar Menu -->
      <ul class="sidebar-menu">
        <!-- Optionally, you can add icons to the links -->
        <li class="treeview">
         <a href="#"><i class="fa fa-clone"></i> <span>CMS</span> <i class="fa fa-angle-left pull-right"></i></a>
          	<ul class="treeview-menu">
         	  	<li><a href="#">- 입수현황</a></li>
            	<li><a href="#">- 변환현황</a></li>
                <li><a href="#">- 배포현황</a></li>
          	</ul>
        </li>
        <li class="treeview">
         <a href="#"><i class="fa fa-unlock"></i> <span>Open API</span> <i class="fa fa-angle-left pull-right"></i></a>
          	<ul class="treeview-menu">
         	  	<li><a href="#">- 사이트 관리</a></li>
          	</ul>
        </li>
        <li class="treeview">
         <a href="#"><i class="fa fa-file-text-o"></i> <span>프레젠테이션</span> <i class="fa fa-angle-left pull-right"></i></a>
          	<ul class="treeview-menu">
         	  	<li><a href="#">- 검색요청 조회</a></li>
          	</ul>
        </li>
      </ul>
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        입수현황
        <small>입수현황을 확인할 수 있습니다.</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> 홈</a></li>
        <li class="active">CMS</li>
        <li class="active">입수현황</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
          <!-- /.box -->
       <div class="box">
          <div class="box-header"></div>
            <!-- /.box-header -->
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
            <!-- /.box-body -->
    </section>
          <!-- /.row -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <!-- /.box-header -->
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
            <!-- /.box-body -->
            <div class="page_box">
              <ul class="pagination pagination-sm no-margin">
                <li><a href="#">&laquo;</a></li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">&raquo;</a></li>
              </ul>
            </div>
          </div>
          <!-- /.box -->
          </div>
        </div>
      </div>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  <!-- Main Footer -->
  <footer class="main-footer">
    <!-- To the right -->
    <div class="pull-right hidden-xs">
     Raonmind
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy; 2016 <a href="#">WAVEM</a>.</strong> All rights reserved.
  </footer>
<!-- ./wrapper -->

<!-- REQUIRED JS SCRIPTS -->

<!-- jQuery 2.2.0 -->
<script src="plugins/jQuery/jQuery-2.2.0.min.js"></script>
<!-- tv_style 3.3.6 -->
<script src="tv_style/js/tv_style.min.js"></script>
<!-- AdminLTE App -->
<script src="dist/js/app.min.js"></script>

</body>
</html>