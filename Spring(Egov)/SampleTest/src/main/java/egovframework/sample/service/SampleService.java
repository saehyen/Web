package egovframework.sample.service;

import java.util.List;

/*SampleService.java : 기능(삽입,갱신,삭제,선택,출력) 에 대한 인터페이스 생성*/

public interface SampleService {

	void insertSample(SampleVO vo) throws Exception;

	void updateSample(SampleVO vo) throws Exception;

	void deleteSample(SampleVO vo) throws Exception;

	SampleVO selectSample(SampleVO vo) throws Exception;

	List<SampleVO> selectSampleList(SampleVO vo) throws Exception;

}