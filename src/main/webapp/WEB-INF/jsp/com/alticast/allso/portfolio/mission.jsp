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
    
    <aside class="bg-primary">
        <div class="container text-center">
            <div class="call-to-action" id="mission">
            	<h2>미션</h2>
            </div>
        </div>
    </aside>

    <aside class="bg-dark">
        <div class="container">
            <div class="row">
		        <div class="container text-center col-lg-6 col-md-6">
		            <div class="call-to-action">
		            	<div>
							<table class="table table-hover">
								<tr>
									<th>목표금액</th>
									<td>100,000,000원</td>
								</tr>
								<tr>
									<th>저축기간</th>
									<td>2017.03.01~2018.03.01</td>
								</tr>
								<tr>
									<th>월저축액</th>
									<td>2,000,000 원</td>
								</tr>
								<tr>
									<th>적립금</th>
									<td>50,000,000 원</td>
								</tr>
								<tr>
									<th>달성률</th>
									<td>50%</td>
								</tr>
							</table>
		            	</div>
		            </div>
		        </div>
		        <div class="container text-center col-lg-6 col-md-6">
		            <div class="call-to-action">
		            	<div id="highchart-section1-1"></div>
		            </div>
		        </div>
            </div>
        </div>
    </aside>
    
    <aside class="bg-primary">
        <div class="container text-center">
            <div class="call-to-action" id="income">
            	<h2>수입</h2>
            </div>
        </div>
    </aside>

    <aside class="bg-dark">
        <div class="container">
            <div class="row">
		        <div class="container text-center col-lg-6 col-md-6">
		            <div class="call-to-action">
		            	<div>2017년 3월</div>
		            	<div>
							<table class="table table-hover">
								<thead>
									<tr>
										<th>구분</th>
										<th>항목</th>
										<th>금액</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>근로소득</td>
										<td>100,000,000원</td>
									</tr>
									<tr>
										<td>2</td>
										<td>이자소득</td>
										<td>100,000,000원</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<td></td>
										<td>Total</td>
										<td>200,000,000원</td>
									</tr>
								</tfoot>
							</table>
		            	</div>
		            </div>
		        </div>
		        <div class="container text-center col-lg-6 col-md-6">
		            <div class="call-to-action">
		            	<div id="highchart-section2-1"></div>
		            </div>
		        </div>
            </div>
        </div>
    </aside>
    
    <aside class="bg-primary">
        <div class="container text-center">
            <div class="call-to-action" id="expense">
            	<h2>지출</h2>
            </div>
        </div>
    </aside>

    <aside class="bg-dark">
        <div class="container">
            <div class="row">
		        <div class="container text-center col-lg-6 col-md-6">
		            <div class="call-to-action">
		            	<div>2017년 3월</div>
		            	<div>
							<table class="table table-hover">
								<thead>
									<tr>
										<th>구분</th>
										<th>항목</th>
										<th>금액</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>주거...</td>
										<td>100,000,000원</td>
									</tr>
									<tr>
										<td>2</td>
										<td>통신</td>
										<td>100,000,000원</td>
									</tr>
									<tr>
										<td>...</td>
										<td>...</td>
										<td>...</td>
									</tr>
									<tr>
										<td>16</td>
										<td>여행</td>
										<td>100,000,000원</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<td></td>
										<td>Total</td>
										<td>1,600,000,000원</td>
									</tr>
								</tfoot>
							</table>
		            	</div>
		            </div>
		        </div>
		        <div class="container text-center col-lg-6 col-md-6">
		            <div class="call-to-action">
		            	<div id="highchart-section2-2"></div>
		            </div>
		        </div>
            </div>
        </div>
    </aside>
    
    <aside class="bg-primary">
        <div class="container text-center">
            <div class="call-to-action" id="save">
            	<h2>저축</h2>
            </div>
        </div>
    </aside>

    <aside class="bg-dark">
        <div class="container">
            <div class="row">
		        <div class="container text-center col-lg-6 col-md-6">
		            <div class="call-to-action">
		            	<div>2017년 3월</div>
		            	<div>
							<table class="table table-hover">
								<thead>
									<tr>
										<th>항목</th>
										<th>금액</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>총 수입</td>
										<td>100,000,000원</td>
									</tr>
									<tr>
										<td>총 지출</td>
										<td>100,000,000원</td>
									</tr>
									<tr>
										<td>저축액</td>
										<td>100,000,000원</td>
									</tr>
								</tbody>
								<tfoot>
								</tfoot>
							</table>
		            	</div>
		            </div>
		        </div>
		        <div class="container text-center col-lg-6 col-md-6">
		            <div class="call-to-action">
		            	<div id="highchart-section2-3"></div>
		            </div>
		        </div>
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
    <script src="/static/js/portfolio/mission.js"></script>
	
</body>
</html>