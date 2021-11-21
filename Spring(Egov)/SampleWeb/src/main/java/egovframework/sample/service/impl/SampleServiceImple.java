package egovframework.sample.service.impl;

import egovframework.sample.service.SampleService;

public class SampleServiceImple implements SampleService {
	private String version;
	private SampleDAO sampleDAO;
	public SampleServiceImple() throws Exception{
		System.out.println("===>SampleServiceImple 생성자1");
		//sampleDAO=new SampleDAOJDBC();
	}
	public SampleServiceImple(SampleDAO sampleDAO) {
		System.out.println("===>SampleServiceImple 생성자2");
		this.sampleDAO=sampleDAO;
	}
	
	public SampleServiceImple(String version, SampleDAO sampleDAO) {
		System.out.println("===>SampleServiceImple 생성자3");
		this.version = version;
		this.sampleDAO = sampleDAO;
	}
	@Override
	public void insertSample() throws Exception{
		sampleDAO.insertSample();
	}
	@Override
	public void updateSample() throws Exception{
		sampleDAO.updateSample();
	}
	@Override
	public void deleteSample() throws Exception{
		sampleDAO.deleteSample();
	}
	@Override
	public void selectSample() throws Exception{
		sampleDAO.selectSample();
	}
	@Override
	public void selectSampleList() throws Exception{
		sampleDAO.selectSampleList();
	}
	
	public void setVersion(String version) {
		this.version = version;
	}
	public void setSampleDAO(SampleDAO sampleDAO) {
		this.sampleDAO = sampleDAO;
	}
	
}
