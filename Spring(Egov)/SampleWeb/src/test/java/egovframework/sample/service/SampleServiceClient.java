package egovframework.sample.service;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;


import egovframework.sample.service.impl.SampleServiceImple;

public class SampleServiceClient {

	public static void main(String[] args) throws Exception {
	AbstractApplicationContext container=new GenericXmlApplicationContext("egovframework/spring/context-common.xml");
	
	SampleService sampleService=(SampleService)container.getBean("sampleService");
	sampleService.insertSample(); 
	sampleService.selectSampleList();
	 
	container.close();
	
	}

}
