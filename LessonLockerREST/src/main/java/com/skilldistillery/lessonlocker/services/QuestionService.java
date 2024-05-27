package com.skilldistillery.lessonlocker.services;

import java.util.List;

import com.skilldistillery.lessonlocker.entities.Question;

public interface QuestionService {


    Question getQuestionById(int id);
    Question createQuestion(Question question);
    Question updateQuestion(int id, Question question);
    boolean deleteQuestion(int id);

	List<Question> getAllQuestionsByIsEnabled(Boolean isEnabled);
	
	Question findById(int id);
	
	Question enableOrDisableQuestion(int id, boolean isEnabled);

}
