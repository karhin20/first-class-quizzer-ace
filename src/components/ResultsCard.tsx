
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle } from 'lucide-react';

interface ResultsCardProps {
  score: number;
  totalQuestions: number;
  restartTest: () => void;
}

const ResultsCard: React.FC<ResultsCardProps> = ({ 
  score, 
  totalQuestions, 
  restartTest 
}) => {
  const navigate = useNavigate();
  const percentage = Math.round((score / totalQuestions) * 100);
  
  // Determine message based on score
  const getMessage = () => {
    if (percentage >= 80) return "Excellent! Outstanding performance!";
    if (percentage >= 70) return "Great job! Very good performance!";
    if (percentage >= 60) return "Good work! You're on the right track.";
    if (percentage >= 50) return "Fair effort. Keep practicing!";
    return "You need more practice. Don't give up!";
  };

  return (
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
  );
};

export default ResultsCard;
