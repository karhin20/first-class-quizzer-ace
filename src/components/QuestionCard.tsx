
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Question } from '@/data/questions';

interface QuestionCardProps {
  question: Question;
  selectedOption: string | null;
  showResults: boolean;
  onOptionSelect: (optionId: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  selectedOption, 
  showResults, 
  onOptionSelect 
}) => {
  const getOptionClass = (optionId: string) => {
    if (!showResults) {
      return selectedOption === optionId ? 'selected-option' : '';
    }
    
    if (optionId === question.correctAnswer) {
      return 'correct-option';
    }
    
    if (selectedOption === optionId && optionId !== question.correctAnswer) {
      return 'incorrect-option';
    }
    
    return '';
  };

  // Function to format question text by italicizing underlined words
  const formatQuestionText = (text: string) => {
    // Check if the question contains "underlined word" phrase
    if (text.includes("underlined word")) {
      // Replace instances of underlined with italic
      return text.replace(/underlined/g, "<em>underlined</em>");
    }
    return text;
  };

  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">
          {question.id}. <span dangerouslySetInnerHTML={{ __html: formatQuestionText(question.text) }} />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {question.options.map((option) => (
          <div
            key={option.id}
            className={`p-3 rounded-lg border transition cursor-pointer option-hover ${getOptionClass(option.id)}`}
            onClick={() => !showResults && onOptionSelect(option.id)}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-700 text-sm font-medium">{option.id}</span>
              </div>
              <span className="text-base">{option.text}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
