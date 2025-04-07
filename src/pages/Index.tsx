
import React from 'react';
import { subjects } from '@/data/questions';
import SubjectCard from '@/components/SubjectCard';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">FIRST CLASS MSE 2025</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to the School Test Interface. Select a subject below to start your test.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
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
      </div>
    </div>
  );
};

export default Index;
