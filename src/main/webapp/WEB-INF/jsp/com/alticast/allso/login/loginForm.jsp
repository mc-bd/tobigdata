                <%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>tobigdata</title>

    <!-- Bootstrap Core CSS -->
    <link href="static/common/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="static/common/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>

    <!-- Plugin CSS -->
    <link href="static/common/vendor/magnific-popup/magnific-popup.css" rel="stylesheet">

    <!-- Theme CSS -->
    <link href="static/common/vendor/startbootstrap-creative/css/creative.min.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>
<body>
<!-- 
	<div>header</div>
	<hr><br><br>
 -->

	<!-- navigation -->
    <nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand page-scroll" href="#page-top">tobigdata</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                	<c:choose>
                		<c:when test="${loginUser == null}">
		                    <li>
		                        <a class="page-scroll" href="userLogin.lhj">Login</a>
		                    </li>
                		</c:when>
                		<c:otherwise>
		                    <li>
		                        <a class="page-scroll" href="#">${loginUser.name} (${loginUser.id}) 님 환영합니다.</a>
		                    </li>
		                    <li>
		                        <a class="page-scroll" href="userLogout.lhj">Logout</a>
		                    </li>
		                	<c:choose>
		                		<c:when test="${loginUser.auth == 'A'}">
				                    <li>
				                        <a class="page-scroll" href="adminAllinfo.kms2">Admin</a>
				                    </li>
		                		</c:when>
		                	</c:choose>
                		</c:otherwise>
                	</c:choose>
                    <li>
                        <a class="page-scroll" href="moviePlaying.ksr">Movies</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="startBook.kms">Ticketing</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="about.chh">About</a>
                    </li>
<!--                     
                    <li>
                        <a class="page-scroll" href="#contact">Contact</a>
                    </li>
 -->                    
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>
	<!-- // navigation -->

<!-- 	
    <header>
        <div class="header-content">
            <div class="header-content-inner">
                <h1 id="homeHeading">Your Favorite Source of Free Bootstrap Themes</h1>
                <hr>
                <p>Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!</p>
                <a href="#about" class="btn btn-primary btn-xl page-scroll">Find Out More</a>
            </div>
        </div>
    </header>
 -->    
    
	<!-- header -->
    <aside class="bg-dark">
        <div class="container text-center">
            <div class="call-to-action">
<!--                 
                <h2>Free Download at Start Bootstrap!</h2>
                <a href="http://startbootstrap.com/template-overviews/creative/" class="btn btn-default btn-xl sr-button">Download Now!</a>
 -->                
            </div>
        </div>
    </aside>    
	<!-- // header -->
    
    <section id="services">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                
                
                </div>
            </div>
        </div>
	</section>

	<!-- footer -->
    <section id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 text-center">
<!--                 
                    <h2 class="section-heading">Let's Get In Touch!</h2>
                    <hr class="primary">
 -->                    
                    <p>COPYRIGHT tobigdata. ALL RIGHTS RESERVED</p>
                </div>
<!--                 
                <div class="col-lg-4 col-lg-offset-2 text-center">
                    <i class="fa fa-phone fa-3x sr-contact"></i>
                    <p>123-456-6789</p>
                </div>
                <div class="col-lg-4 text-center">
                    <i class="fa fa-envelope-o fa-3x sr-contact"></i>
                    <p><a href="mailto:your-email@your-domain.com">feedback@startbootstrap.com</a></p>
                </div>
 -->                
            </div>
        </div>
    </section>
    <!-- footer -->

    <!-- jQuery -->
    <script src="static/common/vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="static/common/vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script src="static/common/vendor/scrollreveal/scrollreveal.min.js"></script>
    <script src="static/common/vendor/magnific-popup/jquery.magnific-popup.min.js"></script>

    <!-- Theme JavaScript -->
    <script src="static/common/vendor/startbootstrap-creative/js/creative.min.js"></script>	
	
</body>
</html>