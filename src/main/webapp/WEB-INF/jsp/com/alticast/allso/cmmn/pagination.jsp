<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
            <div class="page_box">
              <ul class="pagination pagination-sm no-margin">
<!--               
                <li><a href="#">&laquo;</a></li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">&raquo;</a></li>
 -->                
              </ul>
            </div>
       		<script type="text/template" id="pagination-template">
				<li><a href="javascript:;" data-page="{{href}}">{{pageNo}}</a></li>
			</script>
            <div class="box-footer clearfix no-border">
              <button id="add" type="button" class="btn btn-default pull-right none"><i class="fa fa-plus"></i>등록</button>
            </div>