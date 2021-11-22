package egovframework.sample.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import egovframework.sample.service.SampleDAO;
import egovframework.sample.service.SampleVO;
@Repository("daoSpring")
public class SampleDAOSpring implements SampleDAO{
	@Resource(name = "jdbcTemplate")
	private JdbcTemplate spring;
	private final String SAMPLE_INSERT="insert into sample(id,title,reg_user,"
			+ "content, reg_date) values"
			+ "(0,?,?,?,now())";
	private final String SAMPLE_DELETE="delete from sample where id=?";
	private final String SAMPLE_UPDATE="update sample set title=?, reg_user=?,"
			+ "content=? where id=?";
	private final String SAMPLE_GET="select * from sample where id=?";
	private final String SAMPLE_LIST="select * from sample order by id desc";
	public SampleDAOSpring() {
		System.out.println("===>SampleDAOSpring생성자");
	}

	@Override
	public void insertSample(SampleVO vo) throws Exception {
		System.out.println("===>Spring으로 insertSample() 기능처리");
		Object[] args= {vo.getTitle(),vo.getRegUser(),vo.getContent()};
		spring.update(SAMPLE_INSERT, args);
	}

	@Override
	public void updateSample(SampleVO vo) throws Exception {
		System.out.println("===>Spring으로 updateSample() 기능처리");
		Object[] args= {vo.getTitle(),vo.getRegUser(),vo.getContent(),vo.getId()};
		spring.update(SAMPLE_UPDATE, args);
		
		
	}

	@Override
	public void deleteSample(SampleVO vo) throws Exception {
		System.out.println("===>Spring으로 deleteSample() 기능처리");
		spring.update(SAMPLE_DELETE, vo.getId());
		
	}

	@Override
	public SampleVO selectSample(SampleVO vo) throws Exception {
		System.out.println("===>Spring으로 selectSample() 기능처리");
		Object[] args= {vo.getId()};
		return spring.queryForObject(SAMPLE_GET,args,new SampleRowMapper());
	}

	@Override
	public List<SampleVO> selectSampleList(SampleVO vo) throws Exception {
		System.out.println("===>Spring으로 selectSampleList() 기능처리");
		return spring.query(SAMPLE_LIST, new SampleRowMapper());
	}

}
