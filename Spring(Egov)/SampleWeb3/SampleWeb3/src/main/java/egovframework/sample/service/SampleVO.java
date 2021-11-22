package egovframework.sample.service;

import java.sql.Date;

public class SampleVO {
	private int id;
	private String title;
	private String regUser;
	private String content;
	private Date regDate;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getRegUser() {
		return regUser;
	}
	public void setRegUser(String regUser) {
		this.regUser = regUser;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Date getRegDate() {
		return regDate;
	}
	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}
	@Override
	public String toString() {
		return "SampleVO [id=" + id + ", title=" + title + ", regUser=" + regUser + ", content=" + content
				+ ", regDate=" + regDate + "]";
	}
	

}
