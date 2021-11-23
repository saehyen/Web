package egovframework.sample.service.impl;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import egovframework.sample.service.SampleVO;

/*select나 select 리스트에 적용하기 위한 맵핑작업*/
public class SampleRowMapper implements RowMapper<SampleVO>{

	@Override
	public SampleVO mapRow(ResultSet rs, int rowNum) throws SQLException {
		SampleVO sample=new SampleVO();
		sample.setId(rs.getString("id"));
		sample.setTitle(rs.getString("title"));
		sample.setName(rs.getString("Name"));
		sample.setContent(rs.getString("content"));
		sample.setRegDate(rs.getDate("reg_date"));
		return sample;
	}

}
