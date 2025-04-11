import React, { useState } from 'react';
import { subjects, Subject } from '@/data/questions';
import SubjectCard from '@/components/SubjectCard';
import { ChevronDown, ChevronRight } from 'lucide-react';

const Index = () => {
  // State to track the currently open category
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  // Categorize subjects
  const categorizedSubjects: Record<string, Subject[]> = {
    English: [],
    Biology: [],
    'Integrated Science': [],
    Maths: [],
    Other: [], // Fallback category
  };

  subjects.forEach((subject) => {
    const nameLower = subject.name.toLowerCase();
    if (nameLower.includes('english')) {
      categorizedSubjects.English.push(subject);
    } else if (nameLower.includes('biology')) {
      categorizedSubjects.Biology.push(subject);
    } else if (nameLower.includes('integrated science')) {
      categorizedSubjects['Integrated Science'].push(subject);
    } else if (nameLower.includes('math') || nameLower.includes('statistics')) {
      categorizedSubjects.Maths.push(subject);
    } else {
      categorizedSubjects.Other.push(subject);
    }
  });

  // Sort subjects within each category alphabetically
  for (const category in categorizedSubjects) {
    categorizedSubjects[category].sort((a, b) => a.name.localeCompare(b.name));
  }

  const categories = Object.keys(categorizedSubjects).filter(
    (category) => categorizedSubjects[category].length > 0
  );

  // Function to toggle category expansion
  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

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
            Welcome! Select a subject category below to view available tests.
          </p>
        </div>
        
        <div className="space-y-4">
          {categories.map((category) => (
            <div key={category} className="border rounded-lg overflow-hidden shadow-sm bg-white">
              <button
                onClick={() => toggleCategory(category)}
                className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  {category} ({categorizedSubjects[category].length} tests)
                </h2>
                {openCategory === category ? <ChevronDown className="h-6 w-6 text-gray-600" /> : <ChevronRight className="h-6 w-6 text-gray-600" />}
              </button>
              
              {/* Conditionally render subjects grid */} 
              {openCategory === category && (
                <div className="p-6 bg-gray-50 border-t">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {categorizedSubjects[category].map((subject) => (
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
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
