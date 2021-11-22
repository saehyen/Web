package egovframework.sample.service.impl;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import egovframework.sample.service.SampleDAO;
import egovframework.sample.service.SampleVO;
@Repository("daoIBatis")
public class SampleDAOIBatis implements SampleDAO{
	public SampleDAOIBatis() {
		System.out.println("===>SampleDAOIBatis생성");
	}
	public void insertSample(SampleVO vo)throws Exception{
		System.out.println("===>IBatis로 insertSample() 기능처리");
	}
	public void updateSample(SampleVO vo)throws Exception{
		System.out.println("===>IBatis로 updateSample() 기능처리");
	}
	public void deleteSample(SampleVO vo)throws Exception{
		System.out.println("===>IBatis로 deleteSample() 기능처리");
	}
	public SampleVO selectSample(SampleVO vo)throws Exception{
		System.out.println("===>IBatis로 selectSample() 기능처리");
		return null;
	}
	public List<SampleVO> selectSampleList(SampleVO vo)throws Exception{
		System.out.println("===>IBatis로 selectSampleList 기능처리");
		return null;
	}


}
