<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
int a=5;
int b=20;
int c=35;
session.setAttribute("c", c);
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<a href="p2.jsp?b=<%=b%>">클릭</a>
<form action="p2.jsp">
<input type="hidden" name="a" value="<%=a%>">
<input type="submit" value="전송">
<%=session.getAttribute("c") %>
</form>
</body>
</html>