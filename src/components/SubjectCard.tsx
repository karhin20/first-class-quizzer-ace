import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Calculator, Beaker, Microscope } from 'lucide-react';

interface SubjectCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  questionCount: number;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ 
  id, 
  title, 
  description, 
  icon, 
  questionCount 
}) => {
  // Render the icon based on the icon name
  const renderIcon = () => {
    switch (icon) {
      case 'book-open':
        return <BookOpen className="h-6 w-6 text-blue-600" />;
      case 'calculator':
        return <Calculator className="h-6 w-6 text-blue-600" />;
      case 'beaker':
        return <Beaker className="h-6 w-6 text-blue-600" />;
      case 'microscope':
        return <Microscope className="h-6 w-6 text-blue-600" />;
      default:
        return <BookOpen className="h-6 w-6 text-blue-600" />;
    }
  };

  return (
    <Link to={questionCount > 0 ? `/test/${id}` : '#'} className="block group">
      <Card className={`transition-all duration-300 border border-gray-200 rounded-xl overflow-hidden group-hover:shadow-lg group-hover:scale-[1.02] ${questionCount === 0 ? 'opacity-60 cursor-not-allowed' : 'hover:border-blue-300'}`}>
        <CardHeader className="flex flex-row items-start gap-4 p-5 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="bg-white p-3 rounded-lg shadow-sm">
            {renderIcon()}
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
              {title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-5 pt-3">
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
        </CardContent>
        <CardFooter className="p-5 pt-0 flex justify-between items-center bg-gray-50/50">
          <Badge variant="secondary" className="bg-gray-100 text-gray-700 border border-gray-200 font-medium">
            {questionCount} Questions
          </Badge>
          {questionCount > 0 ? (
            <span className="text-sm font-medium text-blue-600 group-hover:underline">
              Start Test &rarr;
            </span>
          ) : (
            <span className="text-sm italic text-gray-500">Coming soon</span>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default SubjectCard;
