
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSubjectById } from '@/data/questions';
import QuestionCard from '@/components/QuestionCard';
import ResultsCard from '@/components/ResultsCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const TestPage = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  
  const subject = getSubjectById(subjectId || '');
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  
  useEffect(() => {
    if (!subject || subject.questions.length === 0) {
      toast("Subject not found or has no questions yet", {
        description: "Please select another subject",
        action: {
          label: "Go back",
          onClick: () => navigate('/')
        }
      });
      navigate('/');
    }
  }, [subject, navigate]);
  
  if (!subject || subject.questions.length === 0) {
    return null;
  }
  
  const questions = subject.questions;
  const currentQuestion = questions[currentQuestionIndex];
  
  const handleOptionSelect = (optionId: string) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: optionId
    });
  };
  
  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const calculateScore = () => {
    let newScore = 0;
    questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        newScore += 1;
      }
    });
    return newScore;
  };
  
  const handleSubmitTest = () => {
    const answeredQuestions = Object.keys(answers).length;
    
    if (answeredQuestions < questions.length) {
      const unansweredCount = questions.length - answeredQuestions;
      toast(`You have ${unansweredCount} unanswered questions`, {
        description: "Are you sure you want to submit?",
        action: {
          label: "Submit anyway",
          onClick: () => {
            const calculatedScore = calculateScore();
            setScore(calculatedScore);
            setShowResults(true);
          }
        }
      });
    } else {
      const calculatedScore = calculateScore();
      setScore(calculatedScore);
      setShowResults(true);
    }
  };
  
  const restartTest = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setScore(0);
  };
  
  const selectedOption = answers[currentQuestion.id] || null;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const answeredQuestionsCount = Object.keys(answers).length;
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {!showResults ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{subject.name} Test</h1>
                <p className="text-gray-600">Answer all questions</p>
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-lg">
                <span className="text-blue-800 font-medium">
                  {answeredQuestionsCount} of {questions.length} answered
                </span>
              </div>
            </div>
            
            <div className="mb-4 w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 rounded-full bg-blue-600 transition-all"
                style={{ width: `${(answeredQuestionsCount / questions.length) * 100}%` }}
              ></div>
            </div>
            
            <QuestionCard
              question={currentQuestion}
              selectedOption={selectedOption}
              showResults={false}
              onOptionSelect={handleOptionSelect}
            />
            
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={goToPreviousQuestion}
                disabled={currentQuestionIndex === 0}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>
              
              {isLastQuestion ? (
                <Button 
                  onClick={handleSubmitTest}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                >
                  <CheckCircle className="h-4 w-4" />
                  Submit Test
                </Button>
              ) : (
                <Button 
                  onClick={goToNextQuestion} 
                  className="flex items-center gap-2"
                >
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </>
        ) : (
          <ResultsCard
            score={score}
            totalQuestions={questions.length}
            restartTest={restartTest}
            questions={questions}
            userAnswers={answers}
          />
        )}
      </div>
    </div>
  );
};

export default TestPage;
