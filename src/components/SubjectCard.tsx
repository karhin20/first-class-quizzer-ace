import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Calculator, Beaker, Microscope, Trophy, ArrowRight } from 'lucide-react';

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
    <Card className={`h-full flex flex-col transition-all duration-300 border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-blue-300 ${questionCount === 0 ? 'opacity-60' : ''}`}>
      <CardHeader className="flex flex-row items-start gap-4 p-5 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="bg-white p-3 rounded-lg shadow-sm">
          {renderIcon()}
        </div>
        <div className="flex-1">
          <CardTitle className="text-lg font-semibold text-gray-800">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-5 pt-3 flex-grow">
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="p-4 bg-gray-50/50 flex gap-2">
        {questionCount > 0 ? (
          <>
            <Link to={`/test/${id}`} className="flex-1">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white gap-2">
                Start
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to={`/test/${id}/results`}>
              <Button variant="outline" size="icon" title="View Leaderboard" className="border-yellow-200 hover:bg-yellow-50 hover:text-yellow-700 hover:border-yellow-300">
                <Trophy className="h-4 w-4 text-yellow-500" />
              </Button>
            </Link>
          </>
        ) : (
          <span className="text-sm italic text-gray-500 w-full text-center">Coming soon</span>
        )}
      </CardFooter>
    </Card>
  );
};

export default SubjectCard;
