package egovframework.sample.service;

import java.util.List;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;


import egovframework.sample.service.impl.SampleServiceImple;

public class SampleServiceClient {

	public static void main(String[] args) throws Exception {
	AbstractApplicationContext container=new GenericXmlApplicationContext("egovframework/spring/context-common.xml");
	SampleService samplesv=(SampleService)container.getBean("sampleService");
	SampleVO vo=new SampleVO();
//	vo.setId(2);
//	vo.setRegUser("김철수");
//	vo.setTitle("김철수가 수정한 제목");
//	vo.setContent("김철수가 수정한 내용");
//	samplesv.updateSample(vo);
	//samplesv.deleteSample(vo);
	//vo=samplesv.selectSample(vo);
	//System.out.println(vo.toString());	
//	vo.setTitle("3번째 글");
//	vo.setRegUser("홍길동");
//	vo.setContent("게시글입니다..");
//	samplesv.insertSample(vo);
	List<SampleVO> sampleList=samplesv.selectSampleList(vo);
	System.out.println("[SampleList]");
	for(SampleVO sample:sampleList) {
		System.out.println("--->"+sample.toString());
	}
//	

	container.close();
	
	
	}

}
