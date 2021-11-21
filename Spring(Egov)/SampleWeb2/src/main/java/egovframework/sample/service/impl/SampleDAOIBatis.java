package egovframework.sample.service.impl;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import egovframework.sample.service.SampleDAO;
//@Repository
public class SampleDAOIBatis implements SampleDAO{
	public SampleDAOIBatis() {
		System.out.println("===>SampleDAOIBatis생성");
	}
	public void insertSample()throws Exception{
		System.out.println("===>IBatis로 insertSample() 기능처리");
	}
	public void updateSample()throws Exception{
		System.out.println("===>IBatis로 updateSample() 기능처리");
	}
	public void deleteSample()throws Exception{
		System.out.println("===>IBatis로 deleteSample() 기능처리");
	}
	public void selectSample()throws Exception{
		System.out.println("===>IBatis로 selectSample() 기능처리");
	}
	public void selectSampleList()throws Exception{
		System.out.println("===>IBatis로 selectSampleList 기능처리");
	}


}
