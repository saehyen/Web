package egovframework.sample.service.impl;

public class SampleDAOJDBC implements SampleDAO {
	public SampleDAOJDBC() {
		System.out.println("===>SampleDAOJDBC 생성");
	}
	@Override
	public void insertSample()throws Exception{
		System.out.println("===>JDBC로 insertSample() 기능처리");
	}
	@Override
	public void updateSample()throws Exception{
		System.out.println("===>JDBC로 updateSample() 기능처리");
	}
	@Override
	public void deleteSample()throws Exception{
		System.out.println("===>JDBC로 deleteSample() 기능처리");
	}
	@Override
	public void selectSample()throws Exception{
		System.out.println("===>JDBC로 selectSample() 기능처리");
	}
	@Override
	public void selectSampleList()throws Exception{
		System.out.println("===>JDBC로 selectSampleList 기능처리");
	}

}
