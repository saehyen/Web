<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%
request.setCharacterEncoding("utf-8");
String name=request.getParameter("name");
int age=Integer.parseInt(request.getParameter("age"));
String gender=request.getParameter("gender");

%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>회원 정보페이지 입니다.</h1>
<p>이름:<%=name %></p>
<p>나이:<%=age+20 %></p>
<p>성별:<%=gender%></p>
<%-- <p>취미:<%=hobby %></p> --%>
취미는 <%
		String[] hobbys = request.getParameterValues("hobby");
		if(hobbys != null) {
			for (int i = 0; i < hobbys.length; i++) {
%>
	<%= hobbys[i] %>
<%
			}
		}
%>

</body>
</html>