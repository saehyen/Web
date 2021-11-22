package egovframework.sample.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.sample.service.SampleDAO;
import egovframework.sample.service.SampleService;
import egovframework.sample.service.SampleVO;
@Service("sampleService")
public class SampleServiceImple implements SampleService {
	
	//@Resource(name = "daoJDBC")
	@Resource(name = "daoSpring")
	private SampleDAO sampleDAO;
	public SampleServiceImple() throws Exception{
		System.out.println("===>SampleServiceImple 생성자1");
		
	}
	
	@Override
	public void insertSample(SampleVO vo) throws Exception{
		System.out.println(vo.toString());
		sampleDAO.insertSample(vo);
	}
	@Override
	public void updateSample(SampleVO vo) throws Exception{
		sampleDAO.updateSample(vo);
	}
	@Override
	public void deleteSample(SampleVO vo) throws Exception{
		sampleDAO.deleteSample(vo);
	}
	@Override
	public SampleVO selectSample(SampleVO vo) throws Exception{
		return sampleDAO.selectSample(vo);
	}
	@Override
	public List<SampleVO> selectSampleList(SampleVO vo) throws Exception{
		return sampleDAO.selectSampleList(vo);
	}
	
	
}
