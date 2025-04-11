import React from 'react';
import { subjects, Subject } from '@/data/questions';
import SubjectCard from '@/components/SubjectCard';

const Index = () => {
  // Sort subjects alphabetically by name
  const sortedSubjects = [...subjects].sort((a: Subject, b: Subject) => 
    a.name.localeCompare(b.name)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Optional Header/Nav Placeholder */}
      {/* <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-xl font-semibold text-gray-800">First Class Quizzer</h1>
        </div>
      </header> */}
      
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            EARLY RAIN TEST APP
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome! Select a subject below to test your knowledge and prepare for your exams.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedSubjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              id={subject.id}
              title={subject.name}
              description={subject.description}
              icon={subject.icon}
              questionCount={subject.questions.length}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
