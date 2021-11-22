package egovframework.sample.service.impl;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import egovframework.sample.service.SampleVO;

public class SampleRowMapper implements RowMapper<SampleVO>{

	@Override
	public SampleVO mapRow(ResultSet rs, int rowNum) throws SQLException {
		SampleVO sample=new SampleVO();
		sample.setId(rs.getInt("id"));
		sample.setTitle(rs.getString("title"));
		sample.setRegUser(rs.getString("reg_user"));
		sample.setContent(rs.getString("content"));
		sample.setRegDate(rs.getDate("reg_date"));
		return sample;
	}

}
