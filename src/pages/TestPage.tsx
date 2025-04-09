import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSubjectById, Question } from '@/data/questions';
import QuestionCard from '@/components/QuestionCard';
import ResultsCard from '@/components/ResultsCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

// Fisher-Yates Shuffle Algorithm
const shuffleArray = <T extends unknown>(array: T[]): T[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const TestPage = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  
  const subject = getSubjectById(subjectId || '');
  
  // State for shuffled questions
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);

  // Shuffle questions and options once on component mount or when subject changes
  useEffect(() => {
    if (subject && subject.questions.length > 0) {
      const questionsWithOptionsShuffled = subject.questions.map(q => ({
        ...q,
        options: shuffleArray(q.options) // Shuffle options for each question
      }));
      setShuffledQuestions(shuffleArray(questionsWithOptionsShuffled)); // Shuffle questions themselves
      setCurrentQuestionIndex(0); // Reset index when questions are shuffled
      setAnswers({}); // Reset answers
      setShowResults(false); // Ensure results aren't shown
      setScore(0); // Reset score
    } else if (subject === undefined) {
      // Handle subject not found
      toast("Subject not found", {
        description: "Please select a valid subject.",
        action: {
          label: "Go back",
          onClick: () => navigate('/')
        }
      });
      navigate('/');
    } else if (subject && subject.questions.length === 0) {
      // Handle subject with no questions
      toast("No questions available", {
        description: `The subject \"${subject.name}\" has no questions yet.`, 
        action: {
          label: "Go back",
          onClick: () => navigate('/')
        }
      });
      navigate('/');
    }
  }, [subject, navigate]);

  
  // Memoize current question to avoid recalculating on every render
  const currentQuestion = useMemo(() => {
    return shuffledQuestions[currentQuestionIndex];
  }, [shuffledQuestions, currentQuestionIndex]);
  
  // Early return if questions haven't been shuffled yet or subject is invalid
  if (!subject || shuffledQuestions.length === 0 || !currentQuestion) {
    // Optionally show a loading state here
    return <div>Loading test...</div>; 
  }
  
  const handleOptionSelect = (optionId: string) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: optionId
    });
  };
  
  const goToNextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  // Update score calculation to use shuffledQuestions
  const calculateScore = () => {
    let newScore = 0;
    shuffledQuestions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        newScore += 1;
      }
    });
    return newScore;
  };
  
  const handleSubmitTest = () => {
    const answeredQuestions = Object.keys(answers).length;
    const totalQuestions = shuffledQuestions.length; // Use shuffled length
    
    if (answeredQuestions < totalQuestions) {
      const unansweredCount = totalQuestions - answeredQuestions;
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
    // Reshuffle questions and options on restart
    if (subject && subject.questions.length > 0) {
      const questionsWithOptionsShuffled = subject.questions.map(q => ({
        ...q,
        options: shuffleArray(q.options)
      }));
      setShuffledQuestions(shuffleArray(questionsWithOptionsShuffled));
    }
    setAnswers({});
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setScore(0);
  };
  
  const selectedOption = answers[currentQuestion.id] || null;
  const isLastQuestion = currentQuestionIndex === shuffledQuestions.length - 1;
  const answeredQuestionsCount = Object.keys(answers).length;
  const totalQuestionsCount = shuffledQuestions.length;

  // Animation variants
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    if (newDirection > 0) {
      goToNextQuestion();
    } else {
      goToPreviousQuestion();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 overflow-hidden">
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
                  {answeredQuestionsCount} of {totalQuestionsCount} answered
                </span>
              </div>
            </div>
            
            <div className="mb-4 w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 rounded-full bg-blue-600 transition-all"
                style={{ width: `${(answeredQuestionsCount / totalQuestionsCount) * 100}%` }}
              ></div>
            </div>
            
            {/* Animated Question Area */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                className="relative"
              >
                <QuestionCard
                  question={currentQuestion}
                  selectedOption={selectedOption}
                  showResults={false}
                  onOptionSelect={handleOptionSelect}
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Progress Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-4 mb-8">
              {shuffledQuestions.map((q, index) => (
                <div
                  key={q.id}
                  className={`h-3 w-3 rounded-full ${index === currentQuestionIndex ? 'bg-blue-600' : (answers[q.id] ? 'bg-gray-400' : 'bg-gray-200')}`}
                  title={`Question ${index + 1}${answers[q.id] ? ' (Answered)' : ''}`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => paginate(-1)}
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
                  onClick={() => paginate(1)}
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
            totalQuestions={totalQuestionsCount}
            restartTest={restartTest}
            questions={shuffledQuestions || []}
            userAnswers={answers || {}}
          />
        )}
      </div>
    </div>
  );
};

export default TestPage;
