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

    <aside class="">
        <div class="container text-center">
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
    </aside>

    <aside class="bg-dark">
        <div class="container text-center">
            <div class="call-to-action">
            	<div id="highchart-section1-1"></div>
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
    <script src="/static/js/portfolio/expense.js"></script>
	
</body>
</html>