
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
      return selectedOption === optionId ? 'bg-blue-100 border-blue-400' : '';
    }
    
    if (optionId === question.correctAnswer) {
      return 'bg-green-100 border-green-400';
    }
    
    if (selectedOption === optionId && optionId !== question.correctAnswer) {
      return 'bg-red-100 border-red-400';
    }
    
    return '';
  };

  // Function to format question text by italicizing specific words
  const formatQuestionText = (text: string) => {
    // If text already has HTML formatting, return as is
    if (text.includes("<em>")) {
      return text;
    }
    
    // Format scientific names like "Amoeba proteus", "Homo sapiens", etc.
    const scientificNameRegex = /\b([A-Z][a-z]+\s+[a-z]+)\b/g;
    text = text.replace(scientificNameRegex, "<em>$1</em>");
    
    // Format questions about meanings of words
    if (text.includes("nearest in meaning to the")) {
      text = text.replace(/nearest in meaning to the (\w+)/i, 
        'nearest in meaning to the <em>$1</em>');
    }
    
    // Format terms that should be emphasized in classification questions
    const termsToItalicize = [
      "Domain", "Kingdom", "Phylum", "Class", "Order", "Family", "Genus", "Species",
      "binomial nomenclature", "classification", "taxonomy", "taxon", "taxa", 
      "Euglena", "Amoeba", "Spirogyra", "morphology", "physiology"
    ];
    
    termsToItalicize.forEach(term => {
      // Use word boundary to prevent replacing parts of words
      const regex = new RegExp(`\\b${term}\\b`, 'g');
      text = text.replace(regex, `<em>${term}</em>`);
    });
    
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
            className={`p-3 rounded-lg border transition cursor-pointer hover:bg-gray-50 ${getOptionClass(option.id)}`}
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
