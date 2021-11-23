package egovframework.sample.service.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import egovframework.sample.service.SampleDAO;
import egovframework.sample.service.SampleVO;
import egovframework.sample.service.common.JDBCUtil;

@Repository("daoJDBC")
public class SampleDAOJDBC implements SampleDAO {
	private Connection conn;
	private PreparedStatement stmt;
	private ResultSet rs;
	
	private final String SAMPLE_INSERT="insert into person(id,title,reg_user,"
			+ "content, reg_date) values"
			+ "(?,?,?,?,now())";
	private final String SAMPLE_DELETE="delete from person where id=?";
	private final String SAMPLE_UPDATE="update person set title=?, reg_user=?,"
			+ "content=? where id=?";
	private final String SAMPLE_GET="select * from person where id=?";
	private final String SAMPLE_LIST="select * from person order by reg_date desc";
	public SampleDAOJDBC() {
		System.out.println("===>SampleDAOJDBC 생성");
	}
	@Override
	public void insertSample(SampleVO vo)throws Exception{
		System.out.println("===>JDBC로 insertSample() 기능처리");
		conn=JDBCUtil.getConnection();
		stmt=conn.prepareStatement(SAMPLE_INSERT);
		stmt.setString(1, vo.getTitle());
		stmt.setString(2, vo.getName());
		stmt.setString(3, vo.getContent());
		stmt.executeUpdate();
		JDBCUtil.close(stmt, conn);
	}
	@Override
	public void updateSample(SampleVO vo)throws Exception{
		System.out.println("===>JDBC로 updateSample() 기능처리");
		conn=JDBCUtil.getConnection();
		stmt=conn.prepareStatement(SAMPLE_UPDATE);
		stmt.setString(1, vo.getTitle());
		stmt.setString(2, vo.getName());
		stmt.setString(3, vo.getContent());
		stmt.setString(4, vo.getId());
		stmt.executeUpdate();
		JDBCUtil.close(stmt, conn);
			
	}
	@Override
	public void deleteSample(SampleVO vo)throws Exception{
		System.out.println("===>JDBC로 deleteSample() 기능처리");
		conn=JDBCUtil.getConnection();
		stmt=conn.prepareStatement(SAMPLE_DELETE);
		stmt.setString(1, vo.getId());
		stmt.executeUpdate();
		JDBCUtil.close(stmt, conn);
	}
	@Override
	public SampleVO selectSample(SampleVO vo)throws Exception{
		System.out.println("===>JDBC로 selectSample() 기능처리");
		SampleVO sample=null;
		conn=JDBCUtil.getConnection();
		stmt=conn.prepareStatement(SAMPLE_GET);
		stmt.setString(1,vo.getId());
		rs=stmt.executeQuery();
		if(rs.next()) {
			sample=new SampleVO();
			sample.setId(rs.getString("id"));
			sample.setTitle(rs.getString("title"));
			sample.setName(rs.getString("Name"));
			sample.setContent(rs.getString("content"));
			sample.setRegDate(rs.getDate("reg_date"));
		}
		JDBCUtil.close(rs, stmt, conn);;
		return sample;
	}
	@Override
	public List<SampleVO> selectSampleList(SampleVO vo)throws Exception{
		System.out.println("===>JDBC로 selectSampleList 기능처리");
		List<SampleVO> sampleList=new ArrayList<SampleVO>();
		conn=JDBCUtil.getConnection();
		stmt=conn.prepareStatement(SAMPLE_LIST);
		rs=stmt.executeQuery();
		while(rs.next()) {
			SampleVO sample=new SampleVO();
			sample.setId(rs.getString("id"));
			sample.setTitle(rs.getString("title"));
			sample.setName(rs.getString("Name"));
			sample.setContent(rs.getString("content"));
			sample.setRegDate(rs.getDate("reg_date"));
			sampleList.add(sample);
		}
		JDBCUtil.close(rs, stmt, conn);
		return sampleList;
	}

}
