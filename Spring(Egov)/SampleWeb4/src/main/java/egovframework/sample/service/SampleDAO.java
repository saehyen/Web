package egovframework.sample.service;

import java.util.List;

/*다양한 데이터베이스를 맞춰주기위한 인터페이스
*/

public interface SampleDAO {

	void insertSample(SampleVO vo) throws Exception;

	void updateSample(SampleVO vo) throws Exception;

	void deleteSample(SampleVO vo) throws Exception;

	SampleVO selectSample(SampleVO vo) throws Exception;

	List<SampleVO> selectSampleList(SampleVO vo) throws Exception;

}