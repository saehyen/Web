
<%@page import="java.sql.*"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
request.setCharacterEncoding("utf-8");
String memberid=request.getParameter("memberid");
String pass=request.getParameter("pass");
String name=request.getParameter("name");
String email=request.getParameter("email");

out.print(memberid+"<br>");
out.print(pass+"<br>");
out.print(name+"<br>");
out.print(email+"<br>");
Class.forName("org.mariadb.jdbc.Driver");
String url="jdbc:mariadb://localhost:3307/javadb";
String user="lee";
String password="1234";
Connection conn=DriverManager.getConnection(url, user, password);
out.print("====>"+conn);
String sql="insert into member values(?,?,?,?)";
PreparedStatement  pstmt=conn.prepareStatement(sql);
pstmt.setString(1, memberid);
pstmt.setString(2, pass);
pstmt.setString(3, name);
pstmt.setString(4, email);
pstmt.executeUpdate();
pstmt.close();
conn.close();
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
저장성공!!!
</body>
</html>