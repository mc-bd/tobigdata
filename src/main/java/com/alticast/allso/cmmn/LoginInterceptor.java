package com.alticast.allso.cmmn;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class LoginInterceptor extends HandlerInterceptorAdapter {
	private static final Logger log = LoggerFactory.getLogger(LoginInterceptor.class);

	@Override
	public boolean preHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler) throws Exception {
		try {
/* 헤더 확인
			Enumeration<String> headerNames = request.getHeaderNames();
			while (headerNames.hasMoreElements()) {
				String headerName = (String) headerNames.nextElement();
				log.debug("headerName: {}", headerName);
				log.debug("request.getHeaders(headerName): {}", request.getHeaders(headerName));
			}
*/			
			log.debug("request URL: {}", request.getRequestURI());
			log.debug("start LoginInterceptor: {}");
			if (request.getSession().getAttribute("login") != null) {
				log.debug("isLogined: {}", "true");
				return true;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		log.debug("isLogined: {}", "false");
		response.sendRedirect("/login");
		return false;
	}

	@Override
	public void postHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
	}
	
}
