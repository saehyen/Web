<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="guestbook.service.DeleteMessageService" %>
<%@ page import="guestbook.service.ServiceException" %>
<%
int messageId=Integer.parseInt(request.getParameter("messageId"));
String password=request.getParameter("password");
boolean invalidPassword=false;
try{
DeleteMessageService deleteservice=DeleteMessageService.getInstance();
deleteservice.deleteMessage(messageId, password);
}catch(ServiceException ex){
	invalidPassword=true;
}
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>방명록 메세지 삭제</title>
</head>
<body>
<%if(!invalidPassword){ %>
메세지를 삭제 하였습니다.
<%}else{ %>
입력한 암호가 올바르지 않습니다. 암호를 확인 해주세요.
<%} %>
<br/>
<a href="list.jsp">[목록보기]</a>
</body>
</html>