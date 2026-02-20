import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSubjectById, Question } from '@/data/questions';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import QuestionCard from '@/components/QuestionCard';
import ResultsCard from '@/components/ResultsCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle, Clock } from 'lucide-react';
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

// +++ Restore formatTime function +++
const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};
// +++ End restore +++

const TestPage = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const subject = getSubjectById(subjectId || '');
  
  // State for questions (potentially shuffled)
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);
  const [questionTimeRemaining, setQuestionTimeRemaining] = useState<number>(60);
  const questionTimerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Determine timer mode from subject
  const isGlobalTimer = subject?.timerType === 'global';
  const globalTotalTime = subject?.totalTimeSeconds ?? 2700;

  // Set up questions (shuffle options, maybe shuffle questions) and initialize timer
  useEffect(() => {
    if (subject && subject.questions.length > 0) {
      // For global-timer subjects (e.g. Statistics), keep options in fixed order (A, B, C, D)
      // to support sequential step-by-step maths solving. Other subjects shuffle options.
      const questionsWithOptionsShuffled = isGlobalTimer
        ? subject.questions
        : subject.questions.map(q => ({
            ...q,
            options: shuffleArray(q.options)
          }));

      // Shuffle question order *unless* it's Integrated Science or a global-timer subject (e.g. Statistics)
      const finalQuestions = (subject.id.startsWith('integrated-science') || isGlobalTimer)
        ? questionsWithOptionsShuffled
        : shuffleArray(questionsWithOptionsShuffled);

      setCurrentQuestions(finalQuestions);
      
      // Reset other states
      setCurrentQuestionIndex(0);
      setAnswers({});
      setShowResults(false);
      setScore(0);
      // Init timer depending on mode
      setQuestionTimeRemaining(isGlobalTimer ? globalTotalTime : 60);
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

  // Timer Countdown Logic
  useEffect(() => {
    if (questionTimerIntervalRef.current) {
      clearInterval(questionTimerIntervalRef.current);
    }

    if (!showResults) {
      if (!isGlobalTimer) {
        // Per-question mode: reset to 60s on every question change
        setQuestionTimeRemaining(60);
      }

      questionTimerIntervalRef.current = setInterval(() => {
        setQuestionTimeRemaining(prevTime => {
          if (prevTime <= 1) {
            clearInterval(questionTimerIntervalRef.current!);

            if (isGlobalTimer) {
              // Global timer ran out — auto submit entire test
              toast.error("Time's up!", { description: "Submitting your test automatically." });
              handleSubmitTest(true);
            } else {
              // Per-question mode: advance or submit
              if (currentQuestionIndex < currentQuestions.length - 1) {
                toast.warning("Time's up for this question!", { description: "Moving to the next question." });
                paginate(1);
              } else {
                toast.error("Time's up!", { description: "Submitting your test automatically." });
                handleSubmitTest(true);
              }
            }
            return isGlobalTimer ? globalTotalTime : 60;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      if (questionTimerIntervalRef.current) {
        clearInterval(questionTimerIntervalRef.current);
      }
    };
  }, [currentQuestionIndex, showResults, currentQuestions.length, isGlobalTimer]); // for global timer, question index changes don't reset the timer value

  // Memoize current question to avoid recalculating on every render
  const currentQuestion = useMemo(() => {
    return currentQuestions[currentQuestionIndex];
  }, [currentQuestions, currentQuestionIndex]);
  
  // Early return if questions haven't been shuffled yet or subject is invalid
  if (!subject || currentQuestions.length === 0 || !currentQuestion) {
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
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  // Update score calculation to use currentQuestions
  const calculateScore = () => {
    let newScore = 0;
    currentQuestions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        newScore += 1;
      }
    });
    return newScore;
  };
  
  // Modify handleSubmitTest to stop per-question timer
  const handleSubmitTest = async (forceSubmit: boolean = false) => {
    if (questionTimerIntervalRef.current) clearInterval(questionTimerIntervalRef.current);

    const answeredQuestions = Object.keys(answers).length;
    const totalQuestions = currentQuestions.length;
    
    const doSubmit = async () => {
      const calculatedScore = calculateScore();
      setScore(calculatedScore);
      setShowResults(true);

      // Save results to database if user is logged in
      if (user && subject) {
        await supabase.from('test_results').insert({
          user_id: user.id,
          test_id: subject.id,
          test_name: subject.name,
          score: calculatedScore,
          total_questions: totalQuestions,
        } as any);
      }
    };

    if (!forceSubmit && answeredQuestions < totalQuestions) {
      const unansweredCount = totalQuestions - answeredQuestions;
      toast(`You have ${unansweredCount} unanswered questions`, {
        description: "Are you sure you want to submit?",
        action: {
          label: "Submit anyway",
          onClick: () => doSubmit(),
        },
      });
    } else {
      await doSubmit();
    }
  };
  
  // Update restartTest to reset timer correctly
  const restartTest = () => {
    if (questionTimerIntervalRef.current) clearInterval(questionTimerIntervalRef.current);
    
    if (subject && subject.questions.length > 0) {
      const questionsWithOptionsShuffled = isGlobalTimer
        ? subject.questions
        : subject.questions.map(q => ({
            ...q,
            options: shuffleArray(q.options)
          }));
      const finalQuestions = (subject.id.startsWith('integrated-science') || isGlobalTimer)
        ? questionsWithOptionsShuffled
        : shuffleArray(questionsWithOptionsShuffled);
      setCurrentQuestions(finalQuestions);
    }
    setAnswers({});
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setScore(0);
    setPage([0, 0]);
    setQuestionTimeRemaining(isGlobalTimer ? globalTotalTime : 60);
  };
  
  const selectedOption = answers[currentQuestion.id] || null;
  const isLastQuestion = currentQuestionIndex === currentQuestions.length - 1;
  const answeredQuestionsCount = Object.keys(answers).length;
  const totalQuestionsCount = currentQuestions.length;

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
    // Clear interval manually *before* changing the index to prevent race conditions
    if (questionTimerIntervalRef.current) {
      clearInterval(questionTimerIntervalRef.current);
    }
    
    setPage([currentQuestionIndex + newDirection, newDirection]); // Update animation page state first
    
    if (newDirection > 0) {
      goToNextQuestion();
    } else {
      goToPreviousQuestion();
    }
    // The useEffect watching currentQuestionIndex will handle resetting the timer value and starting the new interval
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {!showResults ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{subject.name} Test</h1>
                <p className="text-gray-600">Question {currentQuestionIndex + 1} of {totalQuestionsCount}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full font-medium text-sm border ${
                  questionTimeRemaining <= (isGlobalTimer ? 300 : 10)
                    ? 'bg-red-100 text-red-800 border-red-300 animate-pulse'
                    : 'bg-yellow-100 text-yellow-800 border-yellow-300'
                }`}>
                  <Clock className="h-4 w-4" />
                  <span>{formatTime(questionTimeRemaining)}</span>
                  {isGlobalTimer && <span className="text-xs opacity-70">total</span>}
                </div>
                <div className="bg-blue-50 px-4 py-2 rounded-lg">
                  <span className="text-blue-800 font-medium">
                    {answeredQuestionsCount} of {totalQuestionsCount} answered
                  </span>
                </div>
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
              {currentQuestions.map((q, index) => (
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
                  onClick={() => handleSubmitTest()}
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
            questions={currentQuestions || []}
            userAnswers={answers || {}}
            testName={subject.name}
          />
        )}
      </div>
    </div>
  );
};

export default TestPage;
