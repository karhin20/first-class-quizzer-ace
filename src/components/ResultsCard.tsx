
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Question } from '@/data/questions';

interface ResultsCardProps {
  score: number;
  totalQuestions: number;
  restartTest: () => void;
  questions: Question[];
  userAnswers: Record<number, string>;
}

const ResultsCard: React.FC<ResultsCardProps> = ({ 
  score, 
  totalQuestions, 
  restartTest,
  questions,
  userAnswers
}) => {
  const navigate = useNavigate();
  const percentage = Math.round((score / totalQuestions) * 100);
  const [showReview, setShowReview] = useState(false);
  
  // Determine message based on score
  const getMessage = () => {
    if (percentage >= 80) return "Excellent! Outstanding performance!";
    if (percentage >= 70) return "Great job! Very good performance!";
    if (percentage >= 60) return "Good work! You're on the right track.";
    if (percentage >= 50) return "Fair effort. Keep practicing!";
    return "You need more practice. Don't give up!";
  };

  return (
    <div className="space-y-8">
      <Card className="mb-6 max-w-xl mx-auto">
        <CardHeader className="pb-3 text-center">
          <CardTitle className="text-2xl">Test Results</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="flex justify-center">
            {percentage >= 50 ? (
              <CheckCircle className="h-20 w-20 text-green-500" />
            ) : (
              <XCircle className="h-20 w-20 text-red-500" />
            )}
          </div>
          
          <div className="text-4xl font-bold">
            {score} / {totalQuestions}
          </div>
          
          <div className="text-lg font-medium">
            {getMessage()}
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
            <div 
              className={`h-4 rounded-full ${percentage >= 50 ? 'bg-green-500' : 'bg-red-500'}`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <p className="text-lg font-medium">{percentage}%</p>
        </CardContent>
        <CardFooter className="flex justify-center gap-4">
          <Button variant="outline" onClick={() => navigate('/')}>
            Back to Subjects
          </Button>
          <Button onClick={restartTest}>
            Try Again
          </Button>
        </CardFooter>
      </Card>

      <div className="max-w-xl mx-auto">
        <Button 
          onClick={() => setShowReview(!showReview)} 
          variant="outline" 
          className="w-full flex items-center justify-center gap-2 mb-4"
        >
          {showReview ? 'Hide Review' : 'Show Question Review'} 
          {showReview ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>

        {showReview && questions && questions.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-center mb-4">Answer Review</h2>
            {questions.map((question) => {
              const userAnswer = userAnswers[question.id] || '';
              const isCorrect = userAnswer === question.correctAnswer;
              const userOption = question.options.find(opt => opt.id === userAnswer);
              const correctOption = question.options.find(opt => opt.id === question.correctAnswer);
              
              return (
                <Card key={question.id} className="mb-4">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-md">
                      {question.id}. {question.text}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 pt-0">
                    {question.options && question.options.map((option) => {
                      const isUserSelection = option.id === userAnswer;
                      const isCorrectAnswer = option.id === question.correctAnswer;
                      
                      let optionClass = "p-3 rounded-lg border";
                      if (isCorrectAnswer) {
                        optionClass += " bg-green-100 border-green-300";
                      } else if (isUserSelection && !isCorrect) {
                        optionClass += " bg-red-100 border-red-300";
                      }
                      
                      return (
                        <div key={option.id} className={optionClass}>
                          <div className="flex items-start space-x-3">
                            <div className={`flex-shrink-0 w-6 h-6 rounded-full ${
                              isCorrectAnswer 
                                ? "bg-green-100 text-green-700" 
                                : isUserSelection && !isCorrect 
                                  ? "bg-red-100 text-red-700" 
                                  : "bg-blue-100 text-blue-700"
                            } flex items-center justify-center`}>
                              <span className="text-sm font-medium">{option.id}</span>
                            </div>
                            <span className="text-base">{option.text}</span>
                          </div>
                        </div>
                      );
                    })}
                    
                    <div className="mt-3 text-sm">
                      {!userAnswer && (
                        <p className="text-orange-600 font-medium">You did not answer this question</p>
                      )}
                      {userAnswer && !isCorrect && (
                        <p className="text-red-600 font-medium">
                          Your answer: {userOption?.text || 'None'} (Incorrect)
                        </p>
                      )}
                      {isCorrect && (
                        <p className="text-green-600 font-medium">
                          Your answer: {userOption?.text || 'None'} (Correct)
                        </p>
                      )}
                      {!isCorrect && (
                        <p className="text-green-600 font-medium">
                          Correct answer: {correctOption?.text || 'None'}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsCard;
