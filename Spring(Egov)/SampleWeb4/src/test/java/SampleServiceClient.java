

import java.util.List;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;
import egovframework.sample.service.SampleService;
import egovframework.sample.service.SampleVO;
public class SampleServiceClient {

	public static void main(String[] args) throws Exception {
	AbstractApplicationContext container=
			new GenericXmlApplicationContext("egovframework/spring/context-*.xml");

	SampleService samplesv=(SampleService)container.getBean("sampleService");
	System.out.println(samplesv);
	SampleVO vo=new SampleVO();
	

	List<SampleVO> sampleList=samplesv.selectSampleList(vo);
	System.out.println("[SampleList]");
	for(SampleVO sample:sampleList) {
		System.out.println("--->"+sample.toString());
	}
	container.close();
	
	
	}

}
