package egovframework.sample.service;

import java.sql.Date;
/*다양한 데이터베이스에 대한 부모형태의 인터페이스*/

public class SampleVO {
	private String id;
	private String title;
	private String Name;
	private String content;
	private Date regDate;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getName() {
		return Name;
	}
	public void setName(String Name) {
		this.Name = Name;
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
		return "SampleVO [id=" + id + ", title=" + title + ", Name=" + Name + ", content=" + content
				+ ", regDate=" + regDate + "]";
	}
	

}
