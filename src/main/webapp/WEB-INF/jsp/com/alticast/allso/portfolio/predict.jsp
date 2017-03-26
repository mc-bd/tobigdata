<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Asset Management</title>

    <!-- Bootstrap Core CSS -->
    <link href="/static/common/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="/static/common/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>

    <!-- Plugin CSS -->
    <link href="/static/common/vendor/magnific-popup/magnific-popup.css" rel="stylesheet">

    <!-- Theme CSS -->
    <link href="/static/common/vendor/startbootstrap-creative/css/creative.min.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body id="page-top">
    
    <aside class="bg-dark">
        <div class="container text-center">
            <div class="call-to-action">
            	<h2>예측</h2>
            </div>
        </div>
    </aside>

    <aside class="bg-dark">
        <div class="container">
            <div class="row">
		        <div class="container text-center col-lg-6 col-md-6">
		            <div class="call-to-action">
		            	<div>
							<form>
								<div class="form-group row">
								  <label for="totalincome" class="col-2 col-form-label">소득</label>
								  <div class="col-10">
								    <input class="form-control" type="text" value="" id="totalincome">
								  </div>
								</div>
								<div class="form-group row">
								  <label for="food" class="col-2 col-form-label">식비</label>
								  <div class="col-10">
								    <input class="form-control" type="text" value="" id="food">
								  </div>
								</div>
								<div class="form-group row">
								  <label for="transportation" class="col-2 col-form-label">교통비</label>
								  <div class="col-10">
								    <input class="form-control" type="text" value="" id="transportation">
								  </div>
								</div>
								<div class="form-group row">
								  <label for="education" class="col-2 col-form-label">교육비</label>
								  <div class="col-10">
								    <input class="form-control" type="text" value="" id="education">
								  </div>
								</div>
								<button type="button" id="predict1-button" class="btn btn-primary">계산하기</button>
							</form>
		            	</div>
		            </div>
		        </div>
		        <div class="container text-center col-lg-6 col-md-6">
		            <div class="call-to-action">
		            	<div>
							<form>
								<div class="form-group row">
								  <h4>총지출액 예측결과</h4>
								  <h4 id="predict1-text" class="none"></h4>
								</div>
							</form>
		            	</div>
		            </div>
		        </div>
            </div>
        </div>
    </aside>
    
    <aside class="bg-dark">
        <div class="container text-center">
            <div class="call-to-action">
            	<h2>등급</h2>
            </div>
        </div>
    </aside>
    
    <aside class="bg-dark">
        <div class="container text-center">
            <div class="call-to-action">
            	<div id=""></div>
            </div>
        </div>
    </aside>

    <!-- jQuery -->
    <script src="/static/common/vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="/static/common/vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script src="/static/common/vendor/scrollreveal/scrollreveal.min.js"></script>
    <script src="/static/common/vendor/magnific-popup/jquery.magnific-popup.min.js"></script>

    <!-- Theme JavaScript -->
    <script src="/static/common/vendor/startbootstrap-creative/js/creative.min.js"></script>
    
    <!-- highcharts -->
    <script src="https://code.highcharts.com/highcharts.js"></script>
	<script src="https://code.highcharts.com/modules/data.js"></script>
	<script src="https://code.highcharts.com/modules/drilldown.js"></script>	
    <script src="/static/js/portfolio/predict.js"></script>
	
</body>
</html>