
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Calculator, Beaker } from 'lucide-react';

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
      default:
        return <BookOpen className="h-6 w-6 text-blue-600" />;
    }
  };

  return (
    <Card className="transition-all duration-300 hover:shadow-md hover:border-blue-200">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="bg-blue-50 p-2 rounded-full">
          {renderIcon()}
        </div>
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
          {questionCount} Questions
        </Badge>
        {questionCount > 0 ? (
          <Link
            to={`/test/${id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Start Test
          </Link>
        ) : (
          <span className="text-sm italic text-muted-foreground">Coming soon</span>
        )}
      </CardFooter>
    </Card>
  );
};

export default SubjectCard;
