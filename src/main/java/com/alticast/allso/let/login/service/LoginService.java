package com.alticast.allso.let.login.service;

import java.util.HashMap;
import java.util.Map;

public interface LoginService {

	Map<String, Object> loginUser(HashMap<String, Object> paramMap) throws Exception;

}
