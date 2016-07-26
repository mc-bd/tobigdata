<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
  <!-- Main Header -->
  <header class="main-header">
    <!-- Logo -->
    <a href="/home" class="logo">
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>ALLSO</b>TV</span>
    </a>

    <!-- Header Navbar -->
    <nav class="navbar navbar-static-top" role="navigation">
      <!-- Sidebar toggle button-->
      <a href="javascript:;" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- User Account Menu -->
          <li class="dropdown user user-menu">
            <!-- Menu Toggle Button -->
            <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
              <!-- hidden-xs hides the username on small devices so only the image appears. -->
              <span class="hidden-xs">${login.userId} (${login.userName})님 접속중</span>
            </a>
          </li>
          <!-- Control Sidebar Toggle Button -->
          <li>
            <a href="javascript:;" data-toggle="control-sidebar"> <button type="button" class="btn btn-block btn-default btn-xs logout">로그아웃</button></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>